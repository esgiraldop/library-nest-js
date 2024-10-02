import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/input-dtos/create-book.dto';
import { UpdateBookDto } from './dto/input-dtos/update-book.dto';
import { ApiKeyAuthGuard } from 'src/common/guards/api-key.guard';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('library')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiHeader({
    name: 'x-api-key',
    description: 'Header for the API key',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @UseGuards(ApiKeyAuthGuard)
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @ApiHeader({
    name: 'x-api-key',
    description: 'Header for the API key',
  })
  @UseGuards(ApiKeyAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() newBookData: UpdateBookDto) {
    return this.bookService.update(+id, newBookData);
  }

  @ApiHeader({
    name: 'x-api-key',
    description: 'Header for the API key',
  })
  @UseGuards(ApiKeyAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.delete(+id);
  }
}
