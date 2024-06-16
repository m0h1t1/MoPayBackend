import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpendBonusCategoryService } from './spend-bonus-category.service';
import { CreateSpendBonusCategoryDto } from './dto/create-spend-bonus-category.dto';

@Controller('spend-bonus-categories')
export class SpendBonusCategoryController {
  constructor(private readonly spendBonusCategoryService: SpendBonusCategoryService) {}

  @Post()
  create(@Body() createSpendBonusCategoryDto: CreateSpendBonusCategoryDto) {
    return this.spendBonusCategoryService.create(createSpendBonusCategoryDto);
  }

  @Get()
  findAll() {
    return this.spendBonusCategoryService.findAll();
  }
}
