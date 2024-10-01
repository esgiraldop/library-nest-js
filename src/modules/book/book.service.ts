import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/input-dtos/create-book.dto';
import { CreateBookService } from './dto/services/create-book.service';
import { FindAllBooksService } from './dto/services/find-all-books.service';

@Injectable()
export class BookService {
  constructor(
    private createBookService: CreateBookService,
    private findallBooksService: FindAllBooksService,
  ) {}

  async create(createBookData: CreateBookDto): Promise<Book> {
    return await this.createBookService.create(createBookData);
  }

  findAll(): Promise<Book[]> {
    return this.findallBooksService.FindAllBooks();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
