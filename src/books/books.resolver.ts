import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { BookType } from './graphql/book.type';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Mutation(() => BookType)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.booksService.createBook(createBookInput);
  }

  @Query(() => [BookType], { name: 'findAllBooks' })
  findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query(() => BookType, { name: 'findBook' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Book | string> {
    return this.booksService.findOne(id);
  }

  @Mutation(() => BookType)
  updateBook(
    @Args('id') id: number,
    @Args('updateInput') updateInput: UpdateBookInput,
  ): Promise<Book> {
    return this.booksService.updateBook(id, updateInput);
  }

  @Mutation(() => BookType)
  removeBook(@Args('id') id: number): Promise<Book> {
    return this.booksService.removeBook(id);
  }
}
