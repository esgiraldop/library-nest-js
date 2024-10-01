import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { CreateBookService } from './services/create-book.service';
import { FindBookByIdService } from './services/find-book-by-id.service';
import { FindAllBooksService } from './services/find-all-books.service';
import { UpdateBookByIdService } from './services/update-book.service';

const mockBookRepository = {
  // You can add mock implementations for any methods you'll be using.
  find: jest.fn(),
  save: jest.fn(),
};

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        CreateBookService,
        FindAllBooksService,
        {
          provide: 'BookRepository',
          useValue: mockBookRepository, // Use the mock for BookRepository
        },
        FindBookByIdService,
        UpdateBookByIdService,
      ],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
