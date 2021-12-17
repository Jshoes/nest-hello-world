import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMonkeyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
