import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketController } from './games/games.controller';
import { CardsModule } from './cards/modules/cards.module';

@Module({
  imports: [WebSocketController, CardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
