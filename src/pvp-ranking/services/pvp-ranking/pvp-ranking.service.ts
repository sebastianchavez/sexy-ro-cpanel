import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { PvpRanking } from 'src/pvp-ranking/entities/pvpranking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PvpRankingService {

    schema: string = process.env.DB_SCHEMA

    constructor(
        @InjectRepository(PvpRanking)
        private pvpRankingRepository: Repository<PvpRanking>
    ){}

    // * * * * * *
    // | | | | | |
    // | | | | | day of week
    // | | | | months
    // | | | day of month
    // | | hours
    // | minutes
    // seconds (optional)

    @Cron('0 0 0 * * 1')
    async resetPvpRanking(){
        try {
            await this.pvpRankingRepository.clear()
        } catch (error) {
            console.log('ERROR resetPvpRanking');
        }
    }

    async getPvpRanking(){
        try {
            const query = `
                SELECT
                    p.char_id,
                    c.name as user,
                    c.class,
                    c.base_level,
                    c.job_level,
                    p.kill,
                    p.death,
                    g.name as guild,
                    g.emblem_id,
                    g.emblem_len,
                    g.emblem_data
                FROM ${this.schema}.pvpranking p
                INNER JOIN ${this.schema}.char c ON c.char_id = p.char_id
                LEFT JOIN ${this.schema}.guild g ON g.guild_id = c.guild_id
                ORDER BY p.kill DESC;
            `
            return this.pvpRankingRepository.query(query)
        } catch (error) {
            throw error
        }
    }
}
