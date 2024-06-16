import { CardEarnRate } from '../card-earn-rate.entity';
import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CardEarnRateRepository extends Repository<CardEarnRate> {
  constructor(manager: EntityManager) {
    super(CardEarnRate, manager);
  }
}