import { IsEnum, IsString, IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

import { TenderStatus } from '../enum/tender-status.enum';

@Entity()
export class Tender {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({
    type: 'text'
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  serviceType: string;

  @Column({
    type: 'enum',
    enum: TenderStatus,
    default: TenderStatus.CREATED
  })
  @IsEnum(TenderStatus)
  status: TenderStatus;

  @Column({
    type: 'uuid'
  })
  organizationId: string;

  @Column({
    unique: false
  })
  creatorUsername: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    type: 'int',
    default: 1
  })
  version: number;
}
