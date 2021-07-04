import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uk_working_day_acronym', ['workingDayAcronym'], { unique: true })
@Index('uk_working_day_name', ['workingDayName'], { unique: true })
@Entity('working_day_course', { schema: 'public' })
export class WorkingDayCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'working_day_acronym',
    length: 100,
    nullable: false,
  })
  workingDayAcronym: string;

  @Column('varchar', {
    name: 'working_day_name',
    length: 40,
    nullable: false,
  })
  workingDayName: string;

  @Column('varchar', {
    name: 'description',
    length: 100,
    nullable: true,
  })
  description: string;

  @Column('varchar', {
    name: 'image_url',
    length: 1000,
    nullable: true,
  })
  imageUrl: string;

  @Column('varchar', {
    name: 'state_working_day',
    length: 40,
    nullable: true,
  })
  stateWorkingDay: string;
}
