import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { CreateBookService } from './dto/services/create-book.service';
import { FindAllBooksService } from './dto/services/find-all-books.service';

const mockBookRepository = { find: jest.fn(), save: jest.fn() };

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        BookService,
        CreateBookService,
        FindAllBooksService,
        { provide: 'BookRepository', useValue: mockBookRepository },
      ],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
