import { Injectable } from '@nestjs/common'
import { Card } from 'src/cards/domain/entities/cards.entities'
import { CardsRepository } from 'src/cards/domain/repository/cards.repository'

@Injectable()
export class InMemoryCardRepository implements CardsRepository {
    private readonly cards: Card[] = [
        {
            title: "bobo",
            description: "bobo",
            img: "",
            cost: 1,
            type: "Legendary"
        }
    ]

    async getAllCards(): Promise<Card[]> {
        const allCards = this.cards;
        return [...allCards];
    }
}