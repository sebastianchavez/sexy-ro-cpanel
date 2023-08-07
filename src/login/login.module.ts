import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './services/login/login.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Login } from './entities/login.entity';
import { Char } from 'src/char/entities/char.entity';

@Module({
  controllers: [LoginController],
  imports: [
    TypeOrmModule.forFeature([Login, Char])
  ],
  providers: [LoginService]
})
export class LoginModule {}
