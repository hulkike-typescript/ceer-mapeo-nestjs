import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uk_status_name', ['statusName'], { unique: true })
@Entity('training_status', { schema: 'public' })
export class TrainingStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'status_name', length: 40, nullable: false })
  statusName: string;

  @Column('varchar', { name: 'state_training', length: 40, nullable: false })
  stateTraining: string;
}
