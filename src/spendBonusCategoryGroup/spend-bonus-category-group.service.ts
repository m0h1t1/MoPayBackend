import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpendBonusCategoryGroup } from './spend-bonus-category-group.entity';
import { CreateSpendBonusCategoryGroupDto } from './dto/create-spend-bonus-category-group.dto';

@Injectable()
export class SpendBonusCategoryGroupService {
  constructor(
    @InjectRepository(SpendBonusCategoryGroup)
    private spendBonusCategoryGroupRepository: Repository<SpendBonusCategoryGroup>,
  ) {}

  create(createSpendBonusCategoryGroupDto: CreateSpendBonusCategoryGroupDto) {
    const spendBonusCategoryGroup = this.spendBonusCategoryGroupRepository.create(createSpendBonusCategoryGroupDto);
    return this.spendBonusCategoryGroupRepository.save(spendBonusCategoryGroup);
  }

  findAll() {
    return this.spendBonusCategoryGroupRepository.find({ relations: ['spendBonusSubcategoryGroups'] });
  }
}
