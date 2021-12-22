import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'books' })
export class Book {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;
}
