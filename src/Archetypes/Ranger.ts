import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static counter = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return this.counter;
  }

  get energyType(): EnergyType {
    return this._energyType;    
  }
}