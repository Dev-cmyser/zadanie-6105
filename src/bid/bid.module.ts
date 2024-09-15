import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BidsController } from './bid.controller';
import { BidsService } from './bid.service';
import { BidHistory } from './entity/bid-history.entity';
import { Bid } from './entity/bid.entity';
import { Review } from './entity/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bid, BidHistory, Review])],
  controllers: [BidsController],
  providers: [BidsService]
})
export class BidsModule {}
