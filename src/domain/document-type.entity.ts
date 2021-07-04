import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uk_initials', ['initials'], { unique: true })
@Index('uk_document_name', ['documentName'], { unique: true })
@Entity('document_type', { schema: 'public' })
export class DocumentType {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('varchar', { name: 'initials', length: 10, nullable: false })
  initials: string;

  @Column('varchar', { name: 'document_name', length: 100, nullable: false })
  documentName: string;

  @Column('varchar', {
    name: 'document_type_name',
    length: 40,
    nullable: false,
  })
  documentTypeName: string;
}
