import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { LoginService } from './services/login/login.service';
import { RequestLogionDto } from './dtos/request-login.dto';
import { Response } from 'express';

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
            throw error
        }
    }
}
