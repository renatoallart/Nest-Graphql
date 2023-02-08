import { Field, InputType } from '@nestjs/graphql';

// dto = data transfer object
@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
