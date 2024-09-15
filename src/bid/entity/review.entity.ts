import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Bid } from './bid.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  authorUsername: string;

  @ManyToOne(() => Bid, bid => bid.reviews)
  bid: Bid;

  @CreateDateColumn()
  createdAt: Date;
}
