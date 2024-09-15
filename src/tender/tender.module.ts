import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TenderHistory } from './entity/history.entity';
import { Tender } from './entity/tender.entity';
import { TenderController } from './tender.controller';
import { TenderService } from './tender.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tender, TenderHistory])],
  controllers: [TenderController],
  providers: [TenderService]
})
export class TenderModule {}
