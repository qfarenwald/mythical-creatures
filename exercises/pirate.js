class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.count = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.count++;
    if(this.count > 2) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}


module.exports = Pirate;
