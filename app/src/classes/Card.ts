enum Type {
  Beast,
  Cursed,
  Dragon,
  Undead,
  Elemental,
  Demon
}

export default abstract class Card {
  constructor(
    public name: string,
    public description: string,
    public effect: string,
    public type: Type,
    public health: number,
    public defense: number,
    public cost: number,
  ) {}

  abstract play(): void

  abstract draw(): boolean

  abstract discard(): void

  abstract destroy(): boolean
}
