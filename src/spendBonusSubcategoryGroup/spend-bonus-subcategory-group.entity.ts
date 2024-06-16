import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { SpendBonusCategory } from '../spendBonusCategory/spend-bonus-category.entity';
import { SpendBonusCategoryGroup } from '../spendBonusCategoryGroup/spend-bonus-category-group.entity';

@Entity()
export class SpendBonusSubcategoryGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  spendBonusSubcategoryGroup: string;

  @ManyToOne(() => SpendBonusCategoryGroup, (group) => group.spendBonusSubcategoryGroups)
  spendBonusCategoryGroup: SpendBonusCategoryGroup;

  @OneToMany(() => SpendBonusCategory, (category) => category.spendBonusSubcategoryGroup)
  spendBonusCategories: SpendBonusCategory[];
}