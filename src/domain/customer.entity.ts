import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('customer', { schema: 'public' })
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'document_number', length: 50, nullable: false })
  documentNumber: string;

  @Column('varchar', { name: 'first_name', length: 50, nullable: false })
  firstName: string;

  @Column('varchar', { name: 'second_name', length: 50, nullable: true })
  secondName: string;

  @Column('varchar', { name: 'first_last_name', length: 50, nullable: false })
  firstLastName: string;

  @Column('varchar', { name: 'second_last_name', length: 50, nullable: true })
  secondLastName: string;
}
