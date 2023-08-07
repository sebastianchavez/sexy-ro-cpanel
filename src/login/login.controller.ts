import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { LoginService } from './services/login/login.service';
import { RequestLogionDto } from './dtos/request-login.dto';
import { Response } from 'express';
import { QueryGetLoginDto } from './dtos/query-get-login.dto';
import { QueryGetLoginsDto } from './dtos/query-get-logins.dto';

@Controller('api/login')
export class LoginController {
    constructor(
        private loginService: LoginService
    ) {}

    @Post('register')
    async registerLogin(@Body() body: RequestLogionDto, @Res() res: Response) {
        try {
            const response = await this.loginService.register(body)
            res.status(HttpStatus.OK).send({
                message: 'Usuario registraodo con éxito',
                idUser: response.raw.insertId
            })
        } catch (error) {
            console.log('ERROR:', error);
            throw error
        }
    }

    @Get('get-login')
    async getLogin(@Query() query: QueryGetLoginDto, @Res() res: Response){
        try {
            const response = await this.loginService.getLogin(query)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            console.log('ERROR:', error);
            throw error
        }
    }

    @Get('get-logins')
    async getLogins(@Query() query: QueryGetLoginsDto, @Res() res: Response){
        try {
            const response = await this.loginService.getLogins(query)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
