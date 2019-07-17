class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
    this.cranky = false;
    if(this.count > 2) {
      this.cranky = true;
    }
  }

  shoot() {
    this.count++;
    if(this.count > 2){
      this.cranky = true;
      return 'NO!';
    }
    if(this.layingDown === true) {
      return 'NO!';
    }
    return 'Twang!!!';
  }

  run() {
    this.count++;
    if(this.count > 2){
    this.cranky = true;
     return 'NO!';
    }
    if(this.layingDown === true) {
      return 'NO!';
    }
    return 'Clop clop clop clop!!!'
  }

  sleep() {
    if(this.standing === true) {
      return 'NO!';
    } else {
      this.cranky = false;
      this.count = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    this.cranky = false;
    if(this.layingDown === true) {
      this.cranky = true;
      return 'Not while I\'m laying down!';
    }
    if(this.count < 3) {
      this.cranky = true;
    }
  }

}


module.exports = Centaur;
