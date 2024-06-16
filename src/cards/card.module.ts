import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { Card } from './card.entity';
import { CardEarnRateModule } from 'src/cardEarnRate/card-earn-rate.module';
import { SpendBonusCategoryGroupModule } from 'src/spendBonusCategoryGroup/spend-bonus-category-group.module';
import { SpendBonusSubcategoryGroupModule } from 'src/spendBonusSubcategoryGroup/spend-bonus-subcategory-group.module';
import { SpendBonusCategoryModule } from 'src/spendBonusCategory/spend-bonus-category.module';
import { CardRepository } from './repositories/card.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Card]),
    forwardRef(() => CardEarnRateModule), // Use forwardRef if there might be a circular dependency
    SpendBonusCategoryGroupModule, // Ensure this module is correctly defined and imported
  ],
  providers: [CardService],
  controllers: [CardController],
  exports: [CardService],
})
export class CardModule {}