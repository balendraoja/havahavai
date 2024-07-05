import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import {City} from './City'

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  icao_code: string

  @Column()
  iata_code: string

  @Column()
  name: string

  @Column()
  type: string

  @Column()
  city_id: number

  @Column()
  country_id: number

  @Column()
  continent_id: number

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  @Column()
  latitude_deg: number

  @Column()
  longitude_deg: number

  @Column({nullable: true})
  elevation_ft: number

  @Column()
  wikipedia_link: string
}
