import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SpendBonusSubcategoryGroup } from '../spendBonusSubcategoryGroup/spend-bonus-subcategory-group.entity';

@Entity()
export class SpendBonusCategoryGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  spendBonusCategoryGroup: string;

  @OneToMany(() => SpendBonusSubcategoryGroup, (subgroup) => subgroup.spendBonusCategoryGroup)
  spendBonusSubcategoryGroups: SpendBonusSubcategoryGroup[];
}