// decorators
import { IsPositive, IsBoolean, IsNumber, IsInt } from 'class-validator';

// constants
import { MONEY_DECIMAL_PLACES } from 'src/utils/common-constants';

// content

export class CreateOfferDto {
  @IsBoolean()
  hidden?: boolean;

  @IsPositive()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: MONEY_DECIMAL_PLACES,
  })
  amount: number;

  @IsInt()
  @IsPositive()
  itemId: number;
}
