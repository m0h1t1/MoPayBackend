
import { EntityRepository, Repository } from 'typeorm';
import { Card } from '../card.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Card)
export class CardRepository extends Repository<Card> {
  // Custom methods for your repository can be added here
}
