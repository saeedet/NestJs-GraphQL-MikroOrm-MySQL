import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  author: string;
}
