import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEarnRateService } from './card-earn-rate.service';
import { CardEarnRateController } from './card-earn-rate.controller';
import { CardEarnRate } from './card-earn-rate.entity';
import { CardEarnRateRepository } from './repositories/card-earn-rate.repository';
import { CardModule } from '../cards/card.module'; // Importing the CardModule
import { CardRepository } from 'src/cards/repositories/card.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CardEarnRate]),
    forwardRef(() => CardModule),
  ],
  providers: [CardEarnRateService],
  controllers: [CardEarnRateController],
  exports: [CardEarnRateService],
})
export class CardEarnRateModule {}
