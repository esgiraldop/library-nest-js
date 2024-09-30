import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { GenreEnum } from '../../enums/genre.enum';

export class CreateBookDto {
  @IsString({ message: 'The value must be a string' })
  @IsNotEmpty({ message: 'The title must not be empty' })
  title: string;

  @IsString({ message: 'The author must be a string' })
  @IsNotEmpty({ message: 'The author must not be empty' })
  author: string;

  @IsEnum(GenreEnum)
  @IsNotEmpty({
    message: `The genre can only be of type ${Object.values(GenreEnum)}}`,
  })
  genre: GenreEnum;

  @IsDateString()
  @IsNotEmpty({ message: 'The published date must not be empty' })
  publishedDate: Date;
}
