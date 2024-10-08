import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBookService } from './services/create-book.service';
import { FindBookByIdService } from './services/find-book-by-id.service';
import { FindAllBooksService } from './services/find-all-books.service';
import { UpdateBookByIdService } from './services/update-book.service';
import { DeleteBookService } from './services/delete-book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [
    BookService,
    CreateBookService,
    FindAllBooksService,
    FindBookByIdService,
    UpdateBookByIdService,
    DeleteBookService,
  ],
})
export class BookModule {}
