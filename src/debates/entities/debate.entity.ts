import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Debate {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
