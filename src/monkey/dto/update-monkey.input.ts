import { CreateMonkeyInput } from './create-monkey.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMonkeyInput extends PartialType(CreateMonkeyInput) {
  @Field(() => Int)
  id: number;
}
