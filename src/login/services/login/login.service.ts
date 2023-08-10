import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestLogionDto } from 'src/login/dtos/request-login.dto';
import { Login } from '../../../login/entities/login.entity';
import { Like, Repository } from 'typeorm';
import { QueryGetLoginDto } from 'src/login/dtos/query-get-login.dto';
import { QueryGetLoginsDto } from 'src/login/dtos/query-get-logins.dto';
import { RequestUpdateLoginDto } from 'src/login/dtos/request-update-login.dto';

@Injectable()
export class LoginService {
    
    constructor(
        @InjectRepository(Login)
        private loginRepository: Repository<Login>,
    ){}

    async getLogin(query: QueryGetLoginDto) {
        try {
            const { email, user } = query
            const loginUser = await this.loginRepository.findOne({
                where: [
                    { 
                        email
                    },
                    {
                        userid: user
                    }
                ]
            })
            return loginUser
        } catch (error) {
            throw error
        } 
    }

    async getLogins(query: QueryGetLoginsDto){
        try {
            const { limit, page, email } = query
            const logins = await this.loginRepository.find({
                select: {
                    account_id: true,
                    userid: true,
                    email: true,
                    last_ip: true,
                    char: true,
                    state: true,
                    sex: true
                },
                where: {
                    email
                },
                skip: (page * limit - limit),
                take: limit,
                relations: ['char']
            })
            const totalAccounts = await this.loginRepository.countBy({email})
            return {
                totalAccounts,
                logins
            }
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

    async updateLogin(request: RequestUpdateLoginDto){
        const { account_id, sex, user_pass } = request
        try {
            const login = await this.loginRepository.findOneBy({ account_id })
            if(login){
                login.sex = sex
                login.user_pass = user_pass
                return this.loginRepository.save(login)
            } else {
                throw new HttpException('Usuario inválido', HttpStatus.BAD_REQUEST)
            }
        } catch (error) {
            throw error            
        }
    }
}
