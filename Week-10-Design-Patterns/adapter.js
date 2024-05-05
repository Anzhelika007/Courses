class Marine {
  attack(target) {
    target.health -= 6;
  }
}

class Zealot {
  attack(target) {
    target.health -= 8;
  }
}

class Zergling {
  attack(target) {
    target.health -= 5;
  }
}

class Mario {
  jumpAttack() {
    console.log('Mamamia!');
    return 3;  // Mario deals 3 damage when he attacks
  }
}

// Adapter class for Mario
class MarioAdapter {
  constructor(marioInstance) {
    this.mario = marioInstance;
  }

  attack(target) {
    // Adapter translates the interface
    let damage = this.mario.jumpAttack();  // This captures Mario's attack damage
    target.health -= damage;  // Apply the damage to the target's health
  }
}

// Example usage:
const mario = new Mario();
const marioAdapter = new MarioAdapter(mario);

const zergling = new Zergling();
zergling.health = 50;

// Mario attacking a zergling
marioAdapter.attack(zergling);

console.log(`Zergling's health after Mario's attack: ${zergling.health}`);  // Should show 47