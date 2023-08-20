import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { CharService } from './services/char/char.service';
import { Response } from 'express';
import { QueryGetCharsDto } from './dto/query-get-chars.dto';

@Controller('api/char')
export class CharController {

    constructor(
        private charService: CharService
    ) {}


    @Get('get-chars')
    async getChars(@Query() query: QueryGetCharsDto, @Res() res: Response){
        try {
            const response = await this.charService.getChars(query)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
