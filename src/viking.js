// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
   return this.strength
  }

  receiveDamage (damage) {
    this.health -= damage; //removes received damage from health property  
    }
  }


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage (damage) {
    this.health -= damage; //removes received damage from health property
    if (this.health > 0) {
      return this.name +" "+ "has received" +" "+ damage +" "+ "points of damage";
    } else if (this.health === 0) {
      return this.name +" "+ "has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super ();
    this.health = health;
    this.strength = strength;
  }
     
    
  receiveDamage (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received" +" "+ damage +" "+ "points of damage";
    } else if (this.health === 0) {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(receivedViking) {
    this.vikingArmy = receivedViking; // I can't figure out how to make it into an array and pass this test
  }
  addSaxon(receivedSaxon){
    this.vikingArmy = receivedSaxon; // Same problem ^^
  }
  vikingAttack() {
    
  }
  saxonAttack() {}
  showStatus() {}
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
