import {
  Get,
  Put,
  Body,
  Post,
  Query,
  Param,
  Patch,
  Controller
} from '@nestjs/common';

import { BidsService } from './bid.service';
import { CreateBidDto } from './dto/create.dto';
import { UpdateBidDto } from './dto/update.dto';
import type { Bid } from './entity/bid.entity';
import type { Review } from './entity/review.entity';
import { BidStatus } from './enum/bid-status.enum';
import { DecisionEnum } from './enum/decision.enum';

@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) {}

  @Post('new')
  async createBid(@Body() createBidDto: CreateBidDto): Promise<Bid> {
    return this.bidsService.createBid(createBidDto);
  }

  @Get('my')
  async getMyBids(
    @Query('limit') limit = 5,
    @Query('offset') offset = 0,
    @Query('username') username: string
  ): Promise<Bid[]> {
    return this.bidsService.getMyBids(username, limit, offset);
  }

  @Get(':tenderId/list')
  async getBidsByTenderId(
    @Param('tenderId') tenderId: string,
    @Query('username') username: string,
    @Query('limit') limit = 5,
    @Query('offset') offset = 0
  ): Promise<Bid[]> {
    return this.bidsService.getBidsByTenderId(tenderId, username, limit, offset);
  }

  @Get(':bidId/status')
  async getBidStatus(@Param('bidId') bidId: string, @Query('username') username: string): Promise<string> {
    return this.bidsService.getBidStatus(bidId, username);
  }

  @Put(':bidId/status')
  async updateBidStatus(
    @Param('bidId') bidId: string,
    @Query('status') status: BidStatus,
    @Query('username') username: string
  ): Promise<Bid> {
    return this.bidsService.updateBidStatus(bidId, status, username);
  }

  @Patch(':bidId/edit')
  async editBid(
    @Param('bidId') bidId: string,
    @Query('username') username: string,
    @Body() updateBidDto: UpdateBidDto
  ): Promise<Bid> {
    return this.bidsService.editBid(bidId, username, updateBidDto);
  }

  @Put(':bidId/submit_decision')
  async submitDecision(
    @Param('bidId') bidId: string,
    @Query('decision') decision: DecisionEnum,
    @Query('username') username: string
  ): Promise<{ decision: DecisionEnum,
      bid: Bid, }> {
    return this.bidsService.submitDecision(bidId, decision, username);
  }

  @Put(':bidId/feedback')
  async sendFeedback(
    @Param('bidId') bidId: string,
    @Query('bidFeedback') bidFeedback: string,
    @Query('username') username: string
  ): Promise<Review> {
    return this.bidsService.sendFeedback(bidId, bidFeedback, username);
  }

  @Get(':tenderId/reviews')
  async getReviewsByAuthor(
    @Param('tenderId') tenderId: string,
    @Query('authorUsername') authorUsername: string,
    @Query('requesterUsername') requesterUsername: string,
    @Query('limit') limit = 5,
    @Query('offset') offset = 0
  ): Promise<Review[]> {
    return this.bidsService.getReviewsByAuthor(tenderId, authorUsername, requesterUsername, limit, offset);
  }

  @Put(':bidId/rollback/:version')
  async rollbackBid(
    @Param('bidId') bidId: string,
    @Param('version') version: number,
    @Query('username') username: string
  ): Promise<Bid> {
    return this.bidsService.rollbackBid(bidId, version, username);
  }
}
