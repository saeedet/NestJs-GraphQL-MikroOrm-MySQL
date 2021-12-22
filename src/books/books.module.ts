import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Book } from './entities/book.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Book] })],
  providers: [BooksResolver, BooksService],
})
export class BooksModule {}
