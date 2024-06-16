import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Card } from '../cards/card.entity';

@Entity()
export class CardEarnRate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  earnRate: number;

  @Column()
  isBonusRate: boolean;

  @Column()
  baseSpendAmount: number;

  @Column()
  baseSpendEarnType: string;

  @Column()
  baseSpendEarnCurrency: string;

  @Column()
  googleMapsBusinessName: string;

  @Column()
  googleMapsCategoryName: string;

  @ManyToOne(() => Card, (card) => card.cardEarnRates)
  card: Card;
}