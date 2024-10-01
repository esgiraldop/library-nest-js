import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindBookByIdService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async find(bookId: number): Promise<Book> {
    const bookResponse = await this.bookRepository.findOne({
      where: { id: bookId },
    });
    if (!bookResponse) {
      throw new ConflictException({
        message: `The book with id ${bookId} does not exists`,
      });
    }
    return bookResponse;
  }
}
