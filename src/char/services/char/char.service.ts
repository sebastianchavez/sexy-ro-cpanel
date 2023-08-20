import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryGetCharsDto } from 'src/char/dto/query-get-chars.dto';
import { Char } from 'src/char/entities/char.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class CharService {

    constructor(
        @InjectRepository(Char)
        private charRepository: Repository<Char>,
    ){}

    async getChars(query: QueryGetCharsDto){
        try {
            const { limit, page, email, name, ip } = query
            const chars = await this.charRepository.find({
                select: {
                    char_id: true,
                    name: true,
                    base_level: true,
                    job_level: true,
                    last_map: true,
                    last_x: true,
                    last_y: true,
                    login: {
                        account_id: true,
                        email: true,
                        last_ip: true
                    }
                },
                relations: ['login'],
                where: {
                    name: Like(`%${name}%`),
                    login: {
                        email: Like(`%${email}%`),
                        last_ip: Like(`%${ip}%`)
                    }
                },
                skip: (page * limit - limit),
                take: limit,
            })
            const charsFormatted = this.formatChars(chars)

            const totalChars = await this.charRepository.countBy({name: Like(`%${name}%`)})
            return {
                totalChars,
                chars: charsFormatted
            }
        } catch (error) {
            throw error
        }
    }

    formatChars(chars: Char[]){
        return chars.map(x => {
            return {
                char_id: x.char_id,
                name: x.name,
                base_level: x.base_level,
                job_level: x.job_level,
                last_map: x.last_map,
                last_x: x.last_x,
                last_y: x.last_y,
                account_id: x.login.account_id,
                email: x.login.email,
                last_ip: x.login.last_ip
            }
        })
    }
}
