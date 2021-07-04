import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uk_name_course_status', ['nameCourseStatus'], { unique: true })
@Entity('course_status', { schema: 'public' })
export class CourseStatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'name_course_status',
    length: 20,
    nullable: false,
  })
  nameCourseStatus: string;

  @Column('varchar', { name: 'state_course', length: 40, nullable: false })
  stateCourse: string;
}
