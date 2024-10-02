import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';

@Injectable()
export class FindAllBooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async FindAllBooks(): Promise<Book[]> {
    const allBooks = await this.bookRepository.find();

    if (!allBooks.length) {
      throw new ConflictException('There are no books available');
    }

    return allBooks;
  }
}
