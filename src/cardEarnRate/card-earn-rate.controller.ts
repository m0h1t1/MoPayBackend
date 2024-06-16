import { Controller, Get, Post, Body } from '@nestjs/common';
import { CardEarnRateService } from './card-earn-rate.service';
import { CreateCardEarnRateDto } from './dto/create-card-earn-rate.dto';

@Controller('card-earn-rates')
export class CardEarnRateController {
  constructor(private readonly cardEarnRateService: CardEarnRateService) {}

  @Post()
  create(@Body() createCardEarnRateDto: CreateCardEarnRateDto) {
    return this.cardEarnRateService.create(createCardEarnRateDto);
  }

  @Get()
  findAll() {
    return this.cardEarnRateService.findAll();
  }
}
