import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/users.entity';
import { CardEarnRateModule } from './cardEarnRate/card-earn-rate.module';
import { CardModule } from './cards/card.module';
import { SpendBonusCategoryModule } from './spendBonusCategory/spend-bonus-category.module';
import { SpendBonusCategoryGroupModule } from './spendBonusCategoryGroup/spend-bonus-category-group.module';
import { SpendBonusSubcategoryGroupModule } from './spendBonusSubcategoryGroup/spend-bonus-subcategory-group.module';
import { CardController } from './cards/card.controller';
import { CardEarnRateController } from './cardEarnRate/card-earn-rate.controller';
import { SpendBonusCategoryController } from './spendBonusCategory/spend-bonus-category.controller';
import { SpendBonusSubcategoryGroupController } from './spendBonusSubcategoryGroup/spend-bonus-subcategory-group.controller';
import { SpendBonusCategoryGroupController } from './spendBonusCategoryGroup/spend-bonus-category-group.controller';
import { CardService } from './cards/card.service';
import { CardEarnRateService } from './cardEarnRate/card-earn-rate.service';
import { SpendBonusCategoryService } from './spendBonusCategory/spend-bonus-category.service';
import { SpendBonusSubcategoryGroupService } from './spendBonusSubcategoryGroup/spend-bonus-subcategory-group.service';
import { SpendBonusCategoryGroupService } from './spendBonusCategoryGroup/spend-bonus-category-group.service';
import { CardEarnRate } from './cardEarnRate/card-earn-rate.entity';
import { Card } from './cards/card.entity';
import { SpendBonusCategory } from './spendBonusCategory/spend-bonus-category.entity';
import { SpendBonusSubcategoryGroup } from './spendBonusSubcategoryGroup/spend-bonus-subcategory-group.entity';
import { SpendBonusCategoryGroup } from './spendBonusCategoryGroup/spend-bonus-category-group.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'postgres',
      entities: [
        User, 
        Card, 
        CardEarnRate, 
        SpendBonusCategory, 
        SpendBonusSubcategoryGroup, 
        SpendBonusCategoryGroup
      ],
      synchronize: true, // set to false in production
    }),
    TypeOrmModule.forFeature([Card]),
    AuthModule,
    UsersModule,
    CardModule,
    CardEarnRateModule,
    SpendBonusCategoryGroupModule,
    SpendBonusCategoryModule,
    SpendBonusSubcategoryGroupModule
  ],
  controllers: [
    AppController,
    CardController,
    CardEarnRateController,
    SpendBonusCategoryController,
    SpendBonusSubcategoryGroupController,
    SpendBonusCategoryGroupController,
  ],
  providers: [
    AppService,
    CardService,
    CardEarnRateService,
    SpendBonusCategoryService,
    SpendBonusSubcategoryGroupService,
    SpendBonusCategoryGroupService,
  ],
})
export class AppModule {}