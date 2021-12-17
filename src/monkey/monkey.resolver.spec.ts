import { Test, TestingModule } from '@nestjs/testing';
import { MonkeyResolver } from './monkey.resolver';
import { MonkeyService } from './monkey.service';

describe('MonkeyResolver', () => {
  let resolver: MonkeyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonkeyResolver, MonkeyService],
    }).compile();

    resolver = module.get<MonkeyResolver>(MonkeyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
