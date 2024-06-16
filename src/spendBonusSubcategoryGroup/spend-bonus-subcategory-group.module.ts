import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpendBonusSubcategoryGroupService } from './spend-bonus-subcategory-group.service';
import { SpendBonusSubcategoryGroupController } from './spend-bonus-subcategory-group.controller';
import { SpendBonusSubcategoryGroup } from './spend-bonus-subcategory-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpendBonusSubcategoryGroup])],
  providers: [SpendBonusSubcategoryGroupService],
  controllers: [SpendBonusSubcategoryGroupController],
})
export class SpendBonusSubcategoryGroupModule {}
