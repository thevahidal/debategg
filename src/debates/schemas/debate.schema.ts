import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Field, ObjectType} from '@nestjs/graphql';

export type DebateDocument = Debate & Document;

@ObjectType()
@Schema()
export class Debate {
  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => String)
  @Prop()
  description: string;

  @Field(() => Date)
  @Prop()
  createdAt: Date;

  @Field(() => Date)
  @Prop()
  updatedAt: Date;
}

export const DebateSchema = SchemaFactory.createForClass(Debate);