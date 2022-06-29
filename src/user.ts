export class User {
  constructor(
    public id: number,
    public name: string,
    public role: StaticRangeInit,
    public age?: number,
  ) { }
}
