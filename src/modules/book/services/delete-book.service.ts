import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteBookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async delete(bookId: number) {
    const crrntBookData = await this.bookRepository.findOneBy({ id: bookId });
    if (!crrntBookData) {
      throw new ConflictException({
        message: `The book with id ${bookId} does not exist`,
      });
    }

    const deleteResponse = await this.bookRepository.delete(bookId);

    if (deleteResponse.affected < 1) {
      throw new ConflictException({ message: 'No book could be deleted' });
    }

    return `Book with id ${bookId} deleted successfully`;
  }
}
