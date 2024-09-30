import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../entities/book.entity';
import { CreateBookDto } from '../input-dtos/create-book.dto';

@Injectable()
export class CreateBookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async create(createBookData: CreateBookDto): Promise<Book> {
    const bookData = await this.bookRepository.create(createBookData);
    return await this.bookRepository.save(bookData);
  }
}
