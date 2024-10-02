import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { GenreEnum } from '../../enums/genre.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'This is a book title' })
  @IsString({ message: 'The value must be a string' })
  @IsNotEmpty({ message: 'The title must not be empty' })
  title: string;

  @ApiProperty({ example: 'Erick test' })
  @IsString({ message: 'The author must be a string' })
  @IsNotEmpty({ message: 'The author must not be empty' })
  author: string;

  @ApiProperty({ example: 'THRILLER', enum: Object.values(GenreEnum) })
  @IsEnum(GenreEnum)
  @IsNotEmpty({
    message: `The genre can only be of type ${Object.values(GenreEnum)}}`,
  })
  genre: GenreEnum;

  @ApiProperty({ example: '2024-05-06' })
  @IsDateString()
  @IsNotEmpty({ message: 'The published date must not be empty' })
  publishedDate: Date;
}
