import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  _id!: string;

  @Column({ type: 'bigint', nullable: false })
  created_at!: number;
}
