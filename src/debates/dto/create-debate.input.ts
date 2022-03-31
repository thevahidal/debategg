import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDebateInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
