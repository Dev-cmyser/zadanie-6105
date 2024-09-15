import {
  Get,
  Put,
  Post,
  Body,
  Query,
  Param,
  Patch,
  HttpCode,
  UseGuards,
  Controller,
  HttpStatus,
  NotFoundException
} from '@nestjs/common';
import { PaginateDto } from 'src/common/paginate.dto';
import { AuthGuard } from 'src/guard/auth.guard';

import { TenderDto } from './dto/create.dto';
import { EditTenderDto } from './dto/edit.dto';
import { UserTendersDto } from './dto/get-user.dto';
import type { Tender } from './entity/tender.entity';
import { TenderStatus } from './enum/tender-status.enum';
import { TenderService } from './tender.service';

@UseGuards(new AuthGuard())
@Controller('tenders')
export class TenderController {
  constructor(private readonly tenderService: TenderService) {}

  @Get()
  async getTenders(@Query() query: PaginateDto): Promise<Tender[]> {
    return this.tenderService.get(query);
  }

  @Get('my')
  async getUserTenders(@Query() query: UserTendersDto): Promise<Tender[]> {
    return this.tenderService.getForUser(query);
  }

  @Post('new')
  @HttpCode(HttpStatus.OK)
  createTender(@Body() createTenderDto: TenderDto): Promise<Tender> {
    return this.tenderService.create(createTenderDto);
  }

  @Get(':tenderId/status')
  async getTenderStatus(
    @Param('tenderId') tenderId: string,
    @Query('username') username: string
  ): Promise<{ status: string, }> {
    const tender = await this.tenderService.getByIdAndUsername(tenderId, username);

    if (!tender) {
      throw new NotFoundException(`Tender with ID ${tenderId} not found for user ${username}`);
    }

    return {
      status: tender.status
    };
  }

  @Put(':tenderId/status')
  async updateTenderStatus(
    @Param('tenderId') tenderId: string,
    @Query('status') status: TenderStatus,
    @Query('username') username: string
  ): Promise<Tender> {
    const tender = await this.tenderService.getByIdAndUsername(tenderId, username);

    if (!tender) {
      throw new NotFoundException(`Tender with ID ${tenderId} not found for user ${username}`);
    }

    return await this.tenderService.updateTenderStatus(tenderId, status);
  }

  @Patch(':tenderId/edit')
  async editTender(
    @Param('tenderId') tenderId: string,
    @Query('username') username: string,
    @Body() updateTenderDto: EditTenderDto
  ): Promise<Tender> {
    const tender = await this.tenderService.getByIdAndUsername(tenderId, username);

    if (!tender) {
      throw new NotFoundException(`Tender with ID ${tenderId} not found for user ${username}`);
    }

    return await this.tenderService.editTender(tenderId, updateTenderDto);
  }

  @Put(':tenderId/rollback/:version')
  async rollbackTenderVersion(
    @Param('tenderId') tenderId: string,
    @Param('version') version: number,
    @Query('username') username: string
  ): Promise<Tender> {
    const tender = await this.tenderService.getByIdAndUsername(tenderId, username);

    if (!tender) {
      throw new NotFoundException(`Tender with ID ${tenderId} not found for user ${username}`);
    }

    return await this.tenderService.rollbackTenderVersion(tenderId, version);
  }
}
