import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async findByKey(key: string): Promise<Card> {
    return this.cardRepository.findOne({ where: { cardKey: key } });
  }

  create(createCardDto: CreateCardDto) {
    const card = this.cardRepository.create(createCardDto);
    return this.cardRepository.save(card);
  }

  findAll() {
    return this.cardRepository.find();
  }
}
