import { Type } from 'class-transformer';
import {
  Min,
  IsInt,
  IsString,
  IsOptional
} from 'class-validator';

export class UserTendersDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  limit?: number = 5;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  offset?: number = 0;

  @IsOptional()
  @IsString()
  username?: string;
}
