import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { CreateBookService } from './services/create-book.service';
import { FindBookByIdService } from './services/find-book-by-id.service';
import { FindAllBooksService } from './services/find-all-books.service';
import { UpdateBookByIdService } from './services/update-book.service';
import { DeleteBookService } from './services/delete-book.service';
import { CanActivate } from '@nestjs/common';
import { ApiKeyAuthGuard } from 'src/common/guards/api-key.guard';

const mockBookRepository = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

// Mock ApiKeyAuthGuard
const mockApiKeyAuthGuard: CanActivate = {
  canActivate: () => {
    return true; // Allow access to the guarded routes during testing
  },
};

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
        FindBookByIdService,
        UpdateBookByIdService,
        DeleteBookService,
      ],
    })
      .overrideGuard(ApiKeyAuthGuard) // Override the guard
      .useValue(mockApiKeyAuthGuard)
      .compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
