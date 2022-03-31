import { CreateDebateInput } from './create-debate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDebateInput extends PartialType(CreateDebateInput) {
  @Field(() => Int)
  id: number;
}
