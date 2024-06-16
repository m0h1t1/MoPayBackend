import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpendBonusCategoryGroupService } from './spend-bonus-category-group.service';
import { CreateSpendBonusCategoryGroupDto } from './dto/create-spend-bonus-category-group.dto';

@Controller('spend-bonus-category-groups')
export class SpendBonusCategoryGroupController {
  constructor(private readonly spendBonusCategoryGroupService: SpendBonusCategoryGroupService) {}

  @Post()
  create(@Body() createSpendBonusCategoryGroupDto: CreateSpendBonusCategoryGroupDto) {
    return this.spendBonusCategoryGroupService.create(createSpendBonusCategoryGroupDto);
  }

  @Get()
  findAll() {
    return this.spendBonusCategoryGroupService.findAll();
  }
}
