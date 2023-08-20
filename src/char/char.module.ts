import { Module } from '@nestjs/common';
import { CharController } from './char.controller';
import { CharService } from './services/char/char.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Char } from './entities/char.entity';

@Module({
  controllers: [CharController],
  imports: [
    TypeOrmModule.forFeature([Char])
  ],
  providers: [CharService],
  exports: [TypeOrmModule]
})
export class CharModule {}
