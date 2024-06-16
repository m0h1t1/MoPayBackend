export class CreateCardEarnRateDto {
  cardKey: string;
  earnRate: number;
  isBonusRate: boolean;
  baseSpendAmount: number;
  baseSpendEarnType: string;
  baseSpendEarnCurrency: string;
  googleMapsBusinessName: string;
  googleMapsCategoryName: string;
}