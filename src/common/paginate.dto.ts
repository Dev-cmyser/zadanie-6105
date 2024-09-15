import { Type, Transform } from 'class-transformer';
import {
  Min,
  IsInt,
  IsArray,
  IsString,
  IsOptional
} from 'class-validator';

export class PaginateDto {
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
  @Transform(({ value }) => (typeof value === 'string' ? [value] : value))
  @IsArray()
  @IsString({
    each: true
  })
  service_type?: string[];
}
