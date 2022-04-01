import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDebateInput {
  @Field(() => String, { description: 'Debate title field' })
  title: String;


  @Field(() => String, { description: 'Debate description field' })
  description: String;
}
