import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBookService } from './dto/services/create-book.service';
import { FindAllBooksService } from './dto/services/find-all-books.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService, CreateBookService, FindAllBooksService],
})
export class BookModule {}
