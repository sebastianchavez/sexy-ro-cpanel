import { Test, TestingModule } from '@nestjs/testing';
import { PvpRankingService } from './pvp-ranking.service';

describe('PvpRankingService', () => {
  let service: PvpRankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PvpRankingService],
    }).compile();

    service = module.get<PvpRankingService>(PvpRankingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
