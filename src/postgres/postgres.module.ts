import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidHistory } from 'src/bid/entity/bid-history.entity';
import { Bid } from 'src/bid/entity/bid.entity';
import { Review } from 'src/bid/entity/review.entity';
import { TenderHistory } from 'src/tender/entity/history.entity';
import { Tender } from 'src/tender/entity/tender.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('POSTGRES_CONN'),

        // todo: uncommnet to prod
        ssl: {
          rejectUnauthorized: false
        },
        synchronize: true,
        entities: [Tender, TenderHistory, Bid, BidHistory, Review]
      })
    })
  ],
  providers: []
})
export class PostgresModule {}
