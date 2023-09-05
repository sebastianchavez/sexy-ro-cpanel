import { Module } from '@nestjs/common';
import { PvpRankingController } from './pvp-ranking.controller';
import { PvpRankingService } from './services/pvp-ranking/pvp-ranking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PvpRanking } from './entities/pvpranking.entity';

@Module({
  controllers: [PvpRankingController],
  imports: [
    TypeOrmModule.forFeature([PvpRanking])
  ],
  providers: [PvpRankingService]
})
export class PvpRankingModule {}
