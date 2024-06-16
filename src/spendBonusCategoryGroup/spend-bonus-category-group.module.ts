import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpendBonusCategoryGroupService } from './spend-bonus-category-group.service';
import { SpendBonusCategoryGroupController } from './spend-bonus-category-group.controller';
import { SpendBonusCategoryGroup } from './spend-bonus-category-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpendBonusCategoryGroup])],
  providers: [SpendBonusCategoryGroupService],
  controllers: [SpendBonusCategoryGroupController],
})
export class SpendBonusCategoryGroupModule {}
