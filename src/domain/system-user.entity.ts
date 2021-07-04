import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('system_user', { schema: 'public' })
export class SystemUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'login', length: 50 })
  login: string;

  @Column('varchar', { name: 'password', length: 60 })
  password: string;

  @Column('varchar', { name: 'email', length: 254 })
  email: string;

  @Column('integer', { name: 'activated' })
  activated: number;

  @Column('varchar', { name: 'lang_key', length: 6 })
  langKey: string;

  @Column('varchar', { name: 'image_url', length: 256 })
  imageUrl: string;

  @Column('varchar', { name: 'activation_key', length: 20 })
  activationKey: string;

  @Column('varchar', { name: 'reset_key', length: 20 })
  resetKey: string;

  @Column('timestamp', { name: 'reset_date' })
  resetDate: Date;
}
