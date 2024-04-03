import { Module } from '@nestjs/common';
import { CardsController } from '../adapter/primary/controller/cards.controller';
import { CardsServices } from '../domain/services/cards.service';
import { InMemoryCardRepository } from '../adapter/secondary/inMemory/cards.inMemory.repository';
import { CardsRepository } from '../domain/repository/cards.repository';


@Module({
    imports:[],
    controllers: [CardsController],
    providers: [
        {provide: CardsServices, useFactory: (repository: CardsRepository) => new CardsServices(repository), inject: ["CARD_REPOSITORY"]},
        {provide: 'CARD_REPOSITORY', useClass: InMemoryCardRepository}
    ]
})

export class CardsModule {}