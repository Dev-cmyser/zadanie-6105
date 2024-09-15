import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

import { TenderStatus } from '../enum/tender-status.enum';

@Entity()
export class TenderHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tenderId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  serviceType: string;

  @Column()
  status: TenderStatus;

  @Column()
  version: number;

  @CreateDateColumn()
  createdAt: Date;
}
