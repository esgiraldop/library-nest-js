import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/input-dtos/create-book.dto';
import { CreateBookService } from './dto/services/create-book.service';

@Injectable()
export class BookService {
  constructor(private createBookService: CreateBookService) {}

  async create(createBookData: CreateBookDto): Promise<Book> {
    return await this.createBookService.create(createBookData);
  }

  findAll() {
    return `This action returns all book`;
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
