import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BidsModule } from './bid/bid.module';
import { PostgresModule } from './postgres/postgres.module';
import { TenderModule } from './tender/tender.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    PostgresModule,
    TenderModule,
    BidsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
