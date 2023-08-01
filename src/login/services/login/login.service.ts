import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestLogionDto } from 'src/login/dtos/request-login.dto';
import { Login } from '../../../login/entities/login.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
    
    constructor(
        @InjectRepository(Login)
        private loginRepository: Repository<Login>,
    ){}

    async getLogin(email: string) {
        try {
            const loginUser = await this.loginRepository.findOneBy({email})
            return loginUser
        } catch (error) {
            throw error
        } 
    }

    async register(request: RequestLogionDto) {
        const account = await this.loginRepository.findOneBy({
            userid: request.userid
        })
        if(account){
            throw new HttpException('Ya existe este usuario', HttpStatus.BAD_REQUEST)
        }

        const login = new Login()
        login.email = request.email
        login.sex = request.sex
        login.userid = request.userid
        login.user_pass = request.user_pass
        login.group_id = 0
        login.state = 0
        login.unban_time = 0
        login.expiration_time = 0
        login.logincount = 0
        login.last_ip = request.last_ip
        login.character_slots = 15
        login.pincode_change = 0
        login.vip_time = 0
        login.old_group = 0
        login.web_auth_token_enabled = 0
        return this.loginRepository.insert(login)
    }
}
