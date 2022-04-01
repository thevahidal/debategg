import { Module } from '@nestjs/common';
import { DebatesService } from './debates.service';
import { DebatesResolver } from './debates.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Debate, DebateSchema } from './schemas/debate.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Debate.name, schema: DebateSchema }])],
  providers: [DebatesResolver, DebatesService],
})

export class DebatesModule {}
