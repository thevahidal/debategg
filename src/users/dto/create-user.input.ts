import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User first name field' })
  firstName: String;

  @Field(() => String, { description: 'User last name field' })
  lastName: String;

  @Field(() => String, { description: 'User username field' })
  username: String;

  @Field(() => String, { description: 'User email field' })
  email: String;

  @Field(() => String, { description: 'User password field' })
  password: String;
}
