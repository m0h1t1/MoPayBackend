import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardEarnRate } from './card-earn-rate.entity';
import { CreateCardEarnRateDto } from './dto/create-card-earn-rate.dto';
import { Card } from '../cards/card.entity';
import { CardEarnRateRepository } from './repositories/card-earn-rate.repository';
import { CardRepository } from 'src/cards/repositories/card.repository';
import { CardService } from 'src/cards/card.service';

@Injectable()
export class CardEarnRateService {
  constructor(
    @InjectRepository(CardEarnRate)
    private readonly cardEarnRateRepository: Repository<CardEarnRate>,
    private readonly cardService: CardService,
  ) {}

  async create(createCardEarnRateDto: CreateCardEarnRateDto): Promise<CardEarnRate> {
    const { cardKey, ...rest } = createCardEarnRateDto;
    const card = await this.cardService.findByKey(cardKey);

    // Create a new CardEarnRate entity
    const cardEarnRate = new CardEarnRate();
    cardEarnRate.card = card;
    cardEarnRate.earnRate = rest.earnRate;
    cardEarnRate.isBonusRate = rest.isBonusRate;
    cardEarnRate.baseSpendAmount = rest.baseSpendAmount;
    cardEarnRate.baseSpendEarnType = rest.baseSpendEarnType;
    cardEarnRate.baseSpendEarnCurrency = rest.baseSpendEarnCurrency;
    cardEarnRate.googleMapsBusinessName = rest.googleMapsBusinessName;
    cardEarnRate.googleMapsCategoryName = rest.googleMapsCategoryName;

    return this.cardEarnRateRepository.save(cardEarnRate);
  }

  findAll(): Promise<CardEarnRate[]> {
    return this.cardEarnRateRepository.find();
  }

  async remove(id: string): Promise<void> {
    await this.cardEarnRateRepository.delete(id);
  }
}
