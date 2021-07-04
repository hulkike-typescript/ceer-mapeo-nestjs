import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('log_audit', { schema: 'public' })
export class LogAuditEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'level_audit', length: 400, nullable: false })
  levelAudit: string;

  @Column('varchar', { name: 'log_name', length: 400, nullable: false })
  logName: string;

  @Column('varchar', { name: 'message_audit', length: 4000, nullable: false })
  messageAudit: string;

  @Column('date', { name: 'date_audit', nullable: false })
  dateAudit: Date;
}
