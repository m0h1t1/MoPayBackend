import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpendBonusCategory } from '../spendBonusCategory/spend-bonus-category.entity';
import { CreateSpendBonusCategoryDto } from './dto/create-spend-bonus-category.dto';

@Injectable()
export class SpendBonusCategoryService {
  constructor(
    @InjectRepository(SpendBonusCategory)
    private spendBonusCategoryRepository: Repository<SpendBonusCategory>,
  ) {}

  create(createSpendBonusCategoryDto: CreateSpendBonusCategoryDto) {
    const spendBonusCategory = this.spendBonusCategoryRepository.create(createSpendBonusCategoryDto);
    return this.spendBonusCategoryRepository.save(spendBonusCategory);
  }

  findAll() {
    return this.spendBonusCategoryRepository.find();
  }
}
