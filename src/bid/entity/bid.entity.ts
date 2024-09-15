import {
  Entity,
  Column,
  OneToMany,
  VersionColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

import { BidStatus } from '../enum/bid-status.enum';

import { Review } from './review.entity';

@Entity()
export class Bid {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @VersionColumn()
  version: number;

  @Column({
    type: 'enum',
    enum: BidStatus,
    default: BidStatus.CREATED
  })
  status: BidStatus;

  @OneToMany(() => Review, review => review.bid, {
    nullable: true
  })
  reviews: Review[];
}
