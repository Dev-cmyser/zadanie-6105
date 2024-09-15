import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import type { CreateBidDto } from './dto/create.dto';
import type { UpdateBidDto } from './dto/update.dto';
import { BidHistory } from './entity/bid-history.entity';
import { Bid } from './entity/bid.entity';
import { Review } from './entity/review.entity';
import type { BidStatus } from './enum/bid-status.enum';
import type { DecisionEnum } from './enum/decision.enum';

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(Bid)
    private readonly bidRepository: Repository<Bid>,
    @InjectRepository(BidHistory)
    private readonly bidHistoryRepository: Repository<BidHistory>
  ) {}

  async createBid(dto: CreateBidDto): Promise<Bid> {
    const newBid = this.bidRepository.create(dto);

    newBid.version = 1;

    const savedBid = await this.bidRepository.save(newBid);

    await this.saveBidHistory(savedBid);

    return savedBid;
  }

  private async saveBidHistory(bid: Bid): Promise<void> {
    const bidHistory = new BidHistory();

    bidHistory.bidId = bid.id;

    bidHistory.name = bid.name;

    bidHistory.description = bid.description;

    bidHistory.tenderId = bid.tenderId;

    bidHistory.organizationId = bid.organizationId;

    bidHistory.creatorUsername = bid.creatorUsername;

    bidHistory.createdAt = bid.createdAt;

    bidHistory.version = bid.version;

    bidHistory.status = bid.status;

    await this.bidHistoryRepository.save(bidHistory);
  }

  async getMyBids(username: string, limit: number, offset: number): Promise<Bid[]> {
    if (!username) {
      throw new NotFoundException('Username is required');
    }

    const bids = await this.bidRepository.find({
      where: {
        creatorUsername: username
      },
      take: limit,
      skip: offset,
      order: {
        name: 'ASC'
      }
    });

    return bids;
  }

  async getBidsByTenderId(tenderId: string, username: string, limit: number, offset: number): Promise<Bid[]> {
    const bids = await this.bidRepository.find({
      where: {
        tenderId,
        creatorUsername: username
      },
      take: limit,
      skip: offset,
      order: {
        name: 'ASC'
      }
    });

    return bids;
  }

  async getBidStatus(bidId: string, username: string): Promise<string> {
    const bid = await this.bidRepository.findOne({
      where: {
        id: bidId,
        creatorUsername: username
      }
    });

    if (!bid) {
      throw new NotFoundException(`Bid with ID ${bidId} not found for user ${username}`);
    }

    return bid.status;
  }

  async updateBidStatus(bidId: string, status: BidStatus, username: string): Promise<Bid> {
    const bid = await this.bidRepository.findOne({
      where: {
        id: bidId,
        creatorUsername: username
      }
    });

    if (!bid) {
      throw new NotFoundException(`Bid with ID ${bidId} not found for user ${username}`);
    }

    bid.status = status;

    await this.saveBidHistory(bid);

    return await this.bidRepository.save(bid);
  }

  async editBid(bidId: string, username: string, updateBidDto: UpdateBidDto): Promise<Bid> {
    const bid = await this.bidRepository.findOne({
      where: {
        id: bidId,
        creatorUsername: username
      }
    });

    if (!bid) {
      throw new NotFoundException(`Bid with ID ${bidId} not found for user ${username}`);
    }

    Object.assign(bid, updateBidDto);

    await this.saveBidHistory(bid);

    return await this.bidRepository.save(bid);
  }

  async submitDecision(
    bidId: string,
    decision: DecisionEnum,
    username: string
  ): Promise<{ decision: DecisionEnum,
      bid: Bid, }> {
    const bid = await this.bidRepository.findOne({
      where: {
        id: bidId,
        creatorUsername: username
      }
    });

    if (!bid) {
      throw new NotFoundException(`Bid with ID ${bidId} not found for user ${username}`);
    }

    const saveBid = await this.bidRepository.save(bid);

    return {
      decision,
      bid: saveBid
    };
  }

  async sendFeedback(bidId: string, feedback: string, authorUsername: string): Promise<Review> {
    const bid = await this.bidRepository.findOne({
      where: {
        id: bidId,
        creatorUsername: authorUsername
      }
    });

    if (!bid) {
      throw new NotFoundException(`Bid with ID ${bidId} not found`);
    }

    const review = this.reviewRepository.create({
      description: feedback,
      authorUsername,
      bid
    });

    return await this.reviewRepository.save(review);
  }

  async getReviewsByAuthor(
    tenderId: string,
    authorUsername: string,
    requesterUsername: string,
    limit: number,
    offset: number
  ): Promise<Review[]> {
    const bids = await this.bidRepository.find({
      where: {
        tenderId,
        creatorUsername: authorUsername
      },
      relations: ['reviews'],
      take: limit,
      skip: offset
    });

    const reviews = bids.flatMap(bid => bid.reviews);

    if (reviews.length === 0) {
      throw new NotFoundException(
        `No reviews found for author ${authorUsername} in tender ${tenderId}, with reqUsername: ${requesterUsername}`
      );
    }

    return reviews;
  }

  async rollbackBid(bidId: string, version: number, username: string): Promise<Bid> {
    const bidHistory = await this.bidHistoryRepository.findOne({
      where: {
        bidId,
        version
      }
    });

    if (!bidHistory) {
      throw new NotFoundException(`Version ${version} of Bid with ID ${bidId} not found`);
    }

    const currentBid = await this.bidRepository.findOne({
      where: {
        id: bidId,
        creatorUsername: username
      }
    });

    if (!currentBid) {
      throw new NotFoundException(`Bid with ID ${bidId} not found for user ${username}`);
    }

    currentBid.name = bidHistory.name;

    currentBid.description = bidHistory.description;

    currentBid.version += 1;

    return await this.bidRepository.save(currentBid);
  }
}
