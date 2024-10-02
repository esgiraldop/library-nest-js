import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { GenreEnum } from '../../enums/genre.enum';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiPropertyOptional({ example: 'This is an updated book title' })
  title?: string;

  @ApiPropertyOptional({ example: 'Updated author name' })
  author?: string;

  @ApiPropertyOptional({ example: 'THRILLER', enum: Object.values(GenreEnum) })
  genre?: GenreEnum;

  @ApiPropertyOptional({ example: '2024-05-06' })
  publishedDate?: Date;
}
