import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpendBonusSubcategoryGroup } from '../spendBonusSubcategoryGroup/spend-bonus-subcategory-group.entity';
import { CreateSpendBonusSubcategoryGroupDto } from './dto/create-spend-bonus-subcategory-group.dto';

@Injectable()
export class SpendBonusSubcategoryGroupService {
  constructor(
    @InjectRepository(SpendBonusSubcategoryGroup)
    private spendBonusSubcategoryGroupRepository: Repository<SpendBonusSubcategoryGroup>,
  ) {}

  create(createSpendBonusSubcategoryGroupDto: CreateSpendBonusSubcategoryGroupDto) {
    const spendBonusSubcategoryGroup = this.spendBonusSubcategoryGroupRepository.create(createSpendBonusSubcategoryGroupDto);
    return this.spendBonusSubcategoryGroupRepository.save(spendBonusSubcategoryGroup);
  }

  findAll() {
    return this.spendBonusSubcategoryGroupRepository.find({ relations: ['spendBonusCategories'] });
  }
}
