import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

   @Column()
   alt_name: string;

  @Column({ nullable: true })
  country_id: number;

  @Column({ default: true })
  is_active: boolean;

  @Column({ nullable: true })
  lat: number;

  @Column({ nullable: true })
  long: number;

@Column()
created_at: Date;

@Column()
updated_at: Date
}
