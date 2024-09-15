import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

import { BidStatus } from '../enum/bid-status.enum';

@Entity()
export class BidHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  bidId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('uuid')
  tenderId: string;

  @Column({
    nullable: true
  })
  organizationId: string;

  @Column({
    nullable: true
  })
  creatorUsername: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  version: number;

  @Column({
    type: 'enum',
    enum: BidStatus,
    default: BidStatus.CREATED
  })
  status: BidStatus;
}
