import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { db } from './config/db.config';
import { CharModule } from './char/char.module';
import { PvpRankingModule } from './pvp-ranking/pvp-ranking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    LoginModule,
    CharModule,
    PvpRankingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
