import { Test, TestingModule } from '@nestjs/testing';
import { PvpRankingController } from './pvp-ranking.controller';

describe('PvpRankingController', () => {
  let controller: PvpRankingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PvpRankingController],
    }).compile();

    controller = module.get<PvpRankingController>(PvpRankingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
