import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { PvpRankingService } from './services/pvp-ranking/pvp-ranking.service';
import { Response } from 'express';

@Controller('api/pvp-ranking')
export class PvpRankingController {

    constructor(
        private pvpRankingService: PvpRankingService
    ){}

    @Get('get-ranking')
    async getPvpRanking(@Res() res: Response){
        try {
            const response = await this.pvpRankingService.getPvpRanking()
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
