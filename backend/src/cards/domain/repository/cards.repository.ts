import { Card } from "../entities/cards.entities";
import { UnitCard } from "../entities/cards.entities";
import { SpellCard } from "../entities/cards.entities";

export interface CardsRepository {
    getAllCards(): Promise<Card[]>
}