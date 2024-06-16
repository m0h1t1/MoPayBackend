import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpendBonusSubcategoryGroupService } from './spend-bonus-subcategory-group.service';
import { CreateSpendBonusSubcategoryGroupDto } from './dto/create-spend-bonus-subcategory-group.dto';

@Controller('spend-bonus-subcategory-groups')
export class SpendBonusSubcategoryGroupController {
  constructor(private readonly spendBonusSubcategoryGroupService: SpendBonusSubcategoryGroupService) {}

  @Post()
  create(@Body() createSpendBonusSubcategoryGroupDto: CreateSpendBonusSubcategoryGroupDto) {
    return this.spendBonusSubcategoryGroupService.create(createSpendBonusSubcategoryGroupDto);
  }

  @Get()
  findAll() {
    return this.spendBonusSubcategoryGroupService.findAll();
  }
}
