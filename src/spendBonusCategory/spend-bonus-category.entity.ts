import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { SpendBonusSubcategoryGroup } from '../spendBonusSubcategoryGroup/spend-bonus-subcategory-group.entity';

@Entity()
export class SpendBonusCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  spendBonusCategoryName: string;

  @Column()
  spendBonusCategoryId: number;

  @ManyToOne(() => SpendBonusSubcategoryGroup, (subgroup) => subgroup.spendBonusCategories)
  spendBonusSubcategoryGroup: SpendBonusSubcategoryGroup;
}