export interface Card {
    title: string,
    description: string,
    img: string,
    cost: number,
    type: string,
}

export interface SpellCard extends Card {
    damage?: number,
    effect? : () => void,
}

export interface UnitCard extends Card {
    life: number,
    attack: number,
}