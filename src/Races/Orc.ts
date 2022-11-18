import Race from './Race';

export default class Orc extends Race {
  private static counter = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.counter += 1;
  }

  static createdRacesInstances(): number {
    return this.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;    
  }
}