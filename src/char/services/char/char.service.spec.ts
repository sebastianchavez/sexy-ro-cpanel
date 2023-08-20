import { Test, TestingModule } from '@nestjs/testing';
import { CharService } from './char.service';

describe('CharService', () => {
  let service: CharService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharService],
    }).compile();

    service = module.get<CharService>(CharService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
