import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { PaginateDto } from 'src/common/paginate.dto';
import { Repository } from 'typeorm';

import type { TenderDto } from './dto/create.dto';
import type { EditTenderDto } from './dto/edit.dto';
import type { UserTendersDto } from './dto/get-user.dto';
import { TenderHistory } from './entity/history.entity';
import { Tender } from './entity/tender.entity';
import { TenderStatus } from './enum/tender-status.enum';

@Injectable()
export class TenderService {
  constructor(
    @InjectRepository(Tender)
    private tenderRepository: Repository<Tender>,
    @InjectRepository(TenderHistory)
    private tenderHistoryRepository: Repository<TenderHistory>
  ) {}

  async get(query: PaginateDto): Promise<Tender[]> {
    const { limit, offset } = query;
    let { service_type } = query;

    service_type = typeof service_type === 'string' ? [service_type] : service_type;

    const qb = this.tenderRepository.createQueryBuilder('tender');

    if (service_type && service_type.length > 0) {
      qb.andWhere('tender.serviceType IN (:...service_type)', {
        service_type
      });
    }

    return qb.take(limit).skip(offset)
      .getMany();
  }

  async create(dto: TenderDto): Promise<Tender> {
    const tender = this.tenderRepository.create({
      ...dto,
      status: TenderStatus.CREATED
    });

    return await this.save(tender);
  }

  private async save(tender: Tender): Promise<Tender> {
    try {
      return await this.tenderRepository.save(tender);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getForUser(query: UserTendersDto): Promise<Tender[]> {
    const {
      limit, offset, username
    } = query;

    const qb = this.tenderRepository

      .createQueryBuilder('tender')
      .where('tender.creatorUsername = :username', {
        username
      })
      .orderBy('tender.name', 'ASC')
      .take(limit)
      .skip(offset);

    return qb.getMany();
  }

  async getByIdAndUsername(tenderId: string, username: string): Promise<Tender | null> {
    return this.tenderRepository.findOne({
      where: {
        id: tenderId,
        creatorUsername: username
      }
    });
  }

  async updateTenderStatus(tenderId: string, status: TenderStatus): Promise<Tender> {
    const tender = await this.tenderRepository.findOne({
      where: {
        id: tenderId
      }
    });

    if (!tender) {
      throw new NotFoundException(`Tender with ID ${tenderId} not found`);
    }

    await this.saveTenderVersion(tender);

    tender.status = status;

    tender.version += 1;

    return await this.tenderRepository.save(tender);
  }

  async editTender(tenderId: string, updateTenderDto: EditTenderDto): Promise<Tender> {
    const tender = await this.tenderRepository.findOne({
      where: {
        id: tenderId
      }
    });

    if (!tender) {
      throw new NotFoundException(`Tender with ID ${tenderId} not found`);
    }

    await this.saveTenderVersion(tender);

    Object.assign(tender, updateTenderDto);

    tender.version += 1;

    return await this.tenderRepository.save(tender);
  }

  async rollbackTenderVersion(tenderId: string, version: number): Promise<Tender> {
    const tenderVersion = await this.tenderHistoryRepository.findOne({
      where: {
        tenderId,
        version
      }
    });

    if (!tenderVersion) {
      throw new NotFoundException(`Version ${version} of Tender with ID ${tenderId} not found`);
    }

    const currentTender = await this.tenderRepository.findOne({
      where: {
        id: tenderId
      }
    });

    if (!currentTender) {
      throw new NotFoundException(`Tender with ID ${tenderId} not found`);
    }

    currentTender.name = tenderVersion.name;

    currentTender.description = tenderVersion.description;

    currentTender.serviceType = tenderVersion.serviceType;

    currentTender.status = tenderVersion.status;

    currentTender.version += 1;

    return await this.tenderRepository.save(currentTender);
  }

  private async saveTenderVersion(tender: Tender): Promise<void> {
    const tenderHistory = new TenderHistory();

    tenderHistory.tenderId = tender.id;

    tenderHistory.name = tender.name;

    tenderHistory.description = tender.description;

    tenderHistory.serviceType = tender.serviceType;

    tenderHistory.status = tender.status;

    tenderHistory.version = tender.version;

    await this.tenderHistoryRepository.save(tenderHistory);
  }
}
