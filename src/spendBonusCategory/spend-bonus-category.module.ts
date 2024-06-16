import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpendBonusCategoryService } from './spend-bonus-category.service';
import { SpendBonusCategoryController } from './spend-bonus-category.controller';
import { SpendBonusCategory } from './spend-bonus-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpendBonusCategory])],
  providers: [SpendBonusCategoryService],
  controllers: [SpendBonusCategoryController],
})
export class SpendBonusCategoryModule {}
