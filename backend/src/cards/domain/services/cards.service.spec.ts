import { CardsServices } from './cards.service';
import { Card } from '../entities/cards.entities';
import { CardsRepository } from '../repository/cards.repository';

// Créez un mock pour le repository
class MockCardsRepository implements CardsRepository {
  getAllCards(): Promise<Card[]> {
    // Mockez ici les données de cartes
    return Promise.resolve([
      { title: 'Card 1', description: 'Description 1', img: 'img1.png', cost: 1, type: 'spell' },
      { title: 'Card 2', description: 'Description 2', img: 'img2.png', cost: 2, type: 'unit', life: 3, attack: 2 }
    ]);
  }
}

describe('CardsServices', () => {
  let service: CardsServices;
  let repository: CardsRepository;

  beforeEach(() => {
    repository = new MockCardsRepository();
    service = new CardsServices(repository);
  });

  it('should return all cards', async () => {
    const allCards = await service.getAllCards();
    expect(allCards).toHaveLength(2);
    expect(allCards[0].title).toEqual('Card 1');
    expect(allCards[1].title).toEqual('Card 2');
  });
});
