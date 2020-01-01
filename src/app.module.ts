import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path'
import { User } from './users/users.entity';
const root: string = path.resolve(__dirname, "..")

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: `${root}/data/line.sqlite`,
    entities: [User]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
