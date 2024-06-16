import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CardEarnRate } from '../cardEarnRate/card-earn-rate.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cardKey: string;

  @Column()
  cardIssuer: string;

  @Column()
  cardName: string;

  @OneToMany(() => CardEarnRate, (cardEarnRate) => cardEarnRate.card)
  cardEarnRates: CardEarnRate[];
}