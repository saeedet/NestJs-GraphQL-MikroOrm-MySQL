import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { BaseEntity } from './baseEntity';
import { Book } from './book.entity';

@Entity({ tableName: 'authors' })
export class Author extends BaseEntity {
  @Property()
  name!: string;

  @OneToMany(() => Book, (book) => book.author)
  books = new Collection<Book>(this);

  constructor(name: string) {
    super();
    this.name = name;
  }
}
