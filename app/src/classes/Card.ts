export default abstract class BaseCard {
  constructor(
    public name: string,
    public description: string,
    public effect: string,
    public type: string,
    public health: number,
    public defense: number,
    public cost: number,
  ) {}

  abstract play(): void

  abstract draw(): boolean

  abstract discard(): void

  abstract destroy(): boolean
}
