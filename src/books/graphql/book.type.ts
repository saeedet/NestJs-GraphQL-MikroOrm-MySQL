import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookType {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;
}
