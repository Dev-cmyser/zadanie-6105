import type { BidStatus } from '../enum/bid-status.enum';

export class CreateBidDto {
  name: string;

  description: string;

  status: BidStatus;

  tenderId: string;

  organizationId: string;

  creatorUsername: string;
}
