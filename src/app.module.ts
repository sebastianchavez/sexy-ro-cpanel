import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { db } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    LoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
