import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Author } from './author.entity';
import { BaseEntity } from './baseEntity';

@Entity({ tableName: 'books' })
export class Book extends BaseEntity {
  @Property()
  title!: string;

  @ManyToOne(() => Author)
  author!: Author;

  constructor(title: string, author: Author) {
    super();
    this.title = title;
    this.author = author;
  }
}
