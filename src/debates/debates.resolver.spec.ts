import { Test, TestingModule } from '@nestjs/testing';
import { DebatesResolver } from './debates.resolver';
import { DebatesService } from './debates.service';

describe('DebatesResolver', () => {
  let resolver: DebatesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebatesResolver, DebatesService],
    }).compile();

    resolver = module.get<DebatesResolver>(DebatesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
