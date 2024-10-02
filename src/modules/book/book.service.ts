import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/input-dtos/create-book.dto';
import { CreateBookService } from './services/create-book.service';
import { FindBookByIdService } from './services/find-book-by-id.service';
import { FindAllBooksService } from './services/find-all-books.service';
import { UpdateBookByIdService } from './services/update-book.service';
import { UpdateBookDto } from './dto/input-dtos/update-book.dto';
import { DeleteBookService } from './services/delete-book.service';

@Injectable()
export class BookService {
  constructor(
    private createBookService: CreateBookService,
    private findallBooksService: FindAllBooksService,
    private findBookByIdService: FindBookByIdService,
    private updateBookByIdService: UpdateBookByIdService,
    private deleteBookService: DeleteBookService,
  ) {}

  async create(createBookData: CreateBookDto): Promise<Book> {
    return await this.createBookService.create(createBookData);
  }

  async findAll(): Promise<Book[]> {
    return await this.findallBooksService.FindAllBooks();
  }

  async findOne(id: number): Promise<Book> {
    return await this.findBookByIdService.find(id);
  }

  async update(id: number, newBookData: UpdateBookDto): Promise<Book> {
    return this.updateBookByIdService.update(id, newBookData);
  }

  async delete(id: number) {
    return this.deleteBookService.delete(id);
  }
}
