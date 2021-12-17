import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Monkey {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
