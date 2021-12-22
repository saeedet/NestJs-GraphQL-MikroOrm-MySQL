import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuthorType } from './author.type';

@ObjectType()
export class BookType {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => AuthorType)
  author: AuthorType;
}
