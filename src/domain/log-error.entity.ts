import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('log_error', { schema: 'public' })
export class LogErrorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'level_error', length: 400, nullable: false })
  levelError: string;

  @Column('varchar', { name: 'log_name', length: 400, nullable: false })
  logName: string;

  @Column('varchar', { name: 'message_error', length: 400, nullable: false })
  messageError: string;

  @Column('date', { name: 'date_error', nullable: false })
  dateError: Date;
}
