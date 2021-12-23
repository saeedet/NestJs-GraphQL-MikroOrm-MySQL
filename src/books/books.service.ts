import { wrap } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Author } from './entities/author.entity';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: EntityRepository<Book>,
  ) {}

  // Create a Book
  async createBook(createBookInput: CreateBookInput): Promise<Book> {
    const author = new Author(createBookInput.author);
    const newBook = new Book(createBookInput.title, author);
    await this.booksRepository.persistAndFlush(newBook);
    return newBook;
  }

  // Find all Books
  async findAll(): Promise<Book[]> {
    return await this.booksRepository.findAll({ populate: ['author'] });
  }

  // Find a Book
  async findOne(id: number): Promise<Book | null> {
    return await this.booksRepository.findOne({ id }, ['author']);
  }

  // Update a Book
  async updateBook(id: number, updateInput: UpdateBookInput): Promise<Book> {
    const thisBook = await this.booksRepository.findOne({ id });
    wrap(thisBook).assign(updateInput);
    await this.booksRepository.persistAndFlush(thisBook);
    return thisBook;
  }

  // Delete a Book
  async removeBook(id: number): Promise<Book> {
    const thisBook = await this.booksRepository.findOne({ id });
    await this.booksRepository.removeAndFlush(thisBook);
    return thisBook;
  }
}
