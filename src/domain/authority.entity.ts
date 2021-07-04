import { Entity, PrimaryColumn } from 'typeorm';

@Entity('authority', { schema: 'public' })
export class Authority {
  @PrimaryColumn()
  name: string;
}
