import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TeamModule } from './modules/team/team.module';
import { GamesModule } from './modules/games/games.module';

@Module({
  imports: [UsersModule, TeamModule, GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
