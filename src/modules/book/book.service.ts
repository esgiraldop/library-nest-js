import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/input-dtos/create-book.dto';
import { CreateBookService } from './services/create-book.service';
import { FindAllBooksService } from './services/find-all-books.service';
import { FindBookByIdService } from './services/find-book-by-id.service';

@Injectable()
export class BookService {
  constructor(
    private createBookService: CreateBookService,
    private findallBooksService: FindAllBooksService,
    private findBookByIdService: FindBookByIdService,
  ) {}

  async create(createBookData: CreateBookDto): Promise<Book> {
    return await this.createBookService.create(createBookData);
  }

  findAll(): Promise<Book[]> {
    return this.findallBooksService.FindAllBooks();
  }

  findOne(id: number) {
    return this.findBookByIdService.find(id);
  }

  update(id: number) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
