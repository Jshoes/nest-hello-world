import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MonkeyService } from './monkey.service';
import { Monkey } from './entities/monkey.entity';
import { CreateMonkeyInput } from './dto/create-monkey.input';
import { UpdateMonkeyInput } from './dto/update-monkey.input';

@Resolver(() => Monkey)
export class MonkeyResolver {
  constructor(private readonly monkeyService: MonkeyService) {}

  @Mutation(() => Monkey)
  createMonkey(@Args('createMonkeyInput') createMonkeyInput: CreateMonkeyInput) {
    return this.monkeyService.create(createMonkeyInput);
  }

  @Query(() => [Monkey], { name: 'monkey' })
  findAll() {
    return this.monkeyService.findAll();
  }

  @Query(() => Monkey, { name: 'monkey' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.monkeyService.findOne(id);
  }

  @Mutation(() => Monkey)
  updateMonkey(@Args('updateMonkeyInput') updateMonkeyInput: UpdateMonkeyInput) {
    return this.monkeyService.update(updateMonkeyInput.id, updateMonkeyInput);
  }

  @Mutation(() => Monkey)
  removeMonkey(@Args('id', { type: () => Int }) id: number) {
    return this.monkeyService.remove(id);
  }
}
