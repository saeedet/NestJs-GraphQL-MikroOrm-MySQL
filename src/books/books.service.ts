import { MikroORM } from '@mikro-orm/core';
import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Inject, Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: EntityRepository<Book>,
  ) {}

  async createBook(createBookInput: CreateBookInput): Promise<Book> {
    const newBook: Book = this.booksRepository.create(createBookInput);

    await this.booksRepository.persistAndFlush(newBook);
    return newBook;
  }

  async findAll(): Promise<Book[]> {
    return await this.booksRepository.findAll();
  }

  async findOne(id: number): Promise<Book> {
    return await this.booksRepository.findOneOrFail({ id: id });
  }

  // update(id: number, updateBookInput: UpdateBookInput) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
