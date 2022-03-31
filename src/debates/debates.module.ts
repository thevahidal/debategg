import { Module } from '@nestjs/common';
import { DebatesService } from './debates.service';
import { DebatesResolver } from './debates.resolver';

@Module({
  providers: [DebatesResolver, DebatesService]
})
export class DebatesModule {}
