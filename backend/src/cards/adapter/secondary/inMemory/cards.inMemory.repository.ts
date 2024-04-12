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
        },
        {
            title: "dzdzd",
            description: "bobo",
            img: "",
            cost: 1,
            type: "Legendary"
        },
        {
            title: "zzzzzzz",
            description: "bobo",
            img: "",
            cost: 1,
            type: "Legendary"
        },
        {
            title: "bodbo",
            description: "bobo",
            img: "",
            cost: 1,
            type: "Legendary"
        },
        {
            title: "azaaaaaaaaa",
            description: "bobo",
            img: "",
            cost: 1,
            type: "Legendary"
        },
        {
            title: "ddddddddd",
            description: "bobo",
            img: "",
            cost: 1,
            type: "Legendary"
        },
        {
            title: "aaaaa",
            description: "bobo",
            img: "",
            cost: 1,
            type: "Legendary"
        },
    ]

    async getAllCards(): Promise<Card[]> {
        const allCards = this.cards;
        return [...allCards];
    }
}