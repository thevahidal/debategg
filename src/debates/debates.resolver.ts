import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DebatesService } from './debates.service';
import { Debate } from './entities/debate.entity';
import { CreateDebateInput } from './dto/create-debate.input';
import { UpdateDebateInput } from './dto/update-debate.input';

@Resolver(() => Debate)
export class DebatesResolver {
  constructor(private readonly debatesService: DebatesService) {}

  @Mutation(() => Debate)
  createDebate(@Args('createDebateInput') createDebateInput: CreateDebateInput) {
    return this.debatesService.create(createDebateInput);
  }

  @Query(() => [Debate], { name: 'debates' })
  findAll() {
    return this.debatesService.findAll();
  }

  @Query(() => Debate, { name: 'debate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.debatesService.findOne(id);
  }

  @Mutation(() => Debate)
  updateDebate(@Args('updateDebateInput') updateDebateInput: UpdateDebateInput) {
    return this.debatesService.update(updateDebateInput.id, updateDebateInput);
  }

  @Mutation(() => Debate)
  removeDebate(@Args('id', { type: () => Int }) id: number) {
    return this.debatesService.remove(id);
  }
}
