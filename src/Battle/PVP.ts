import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    public player1: Fighter,
    public player2: Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    if (this.player1.lifePoints > -1 && this.player2.lifePoints > -1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }  
    return super.fight();
  }
}