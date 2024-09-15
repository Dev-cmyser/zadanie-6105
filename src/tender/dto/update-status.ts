import type { TenderStatus } from '../enum/tender-status.enum';

export class UpdateStatusDto {
  // @IsEnum(TenderStatus)
  status: TenderStatus;

  // @IsString()
  // @IsNotEmpty()
  username: string;
}
