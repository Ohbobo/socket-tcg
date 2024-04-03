import { Card } from "../entities/cards.entities";
import { CardsRepository } from "../repository/cards.repository";

export class CardsServices {
    constructor(private readonly repository: CardsRepository) {}

    async getAllCards(): Promise<Card[]> {
       const allCards = await this.repository.getAllCards();
       return [...allCards];
    }

}