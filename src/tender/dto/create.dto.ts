import { IsEnum, IsString, IsNotEmpty } from 'class-validator';

import { TenderStatus } from '../enum/tender-status.enum';

export class TenderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  serviceType: string;

  @IsEnum(TenderStatus)
  @IsNotEmpty()
  status: TenderStatus;

  @IsString()
  @IsNotEmpty()
  organizationId: string;

  @IsString()
  @IsNotEmpty()
  creatorUsername: string;
}
