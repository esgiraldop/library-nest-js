import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { Repository } from 'typeorm';
import { UpdateBookDto } from '../dto/input-dtos/update-book.dto';

@Injectable()
export class UpdateBookByIdService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async update(bookId: number, newBookData: UpdateBookDto): Promise<Book> {
    const crrntBookData = await this.bookRepository.findOneBy({ id: bookId });
    if (!crrntBookData) {
      throw new ConflictException(`The book with id ${bookId} does not exist`);
    }

    await this.bookRepository.update(bookId, newBookData);

    // Returning the updated object
    return await this.bookRepository.findOneBy({ id: bookId });
  }
}
