import Race from './Race';

export default class Elf extends Race {
  private static counter = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.counter += 1;
  }

  static createdRacesInstances(): number {
    return this.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;    
  }
}