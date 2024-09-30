import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GenreEnum } from '../enums/genre.enum';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  author: string;

  @Column({ type: 'enum', nullable: false, enum: GenreEnum })
  genre: GenreEnum;

  @Column({ type: 'date', nullable: false })
  publishedDate: Date;
}
