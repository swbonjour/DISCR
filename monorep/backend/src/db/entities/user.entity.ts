import { Column, Entity, Index } from 'typeorm';
import { AbstractEntity } from './abstractEntity';

@Entity({ name: 'user' })
@Index(['username'], { unique: true })
export class UserEntity extends AbstractEntity {
  @Column({ type: 'varchar', length: 12, nullable: false, unique: true })
  username!: string;

  @Column({ type: 'text', nullable: false })
  password!: string;

  @Column({ type: 'text', nullable: false, unique: true })
  email!: string;

  @Column({ type: 'bigint', nullable: true })
  last_online?: number;
}
