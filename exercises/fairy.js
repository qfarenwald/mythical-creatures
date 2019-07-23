class Fairy {
  constructor(name, infantObj) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    }
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.infantCount = 0;
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust+=10;
  }

  makeDresses(flowerArray) {
    for(var i = 0; i < flowerArray.length; i++){
    this.clothes.dresses.push(flowerArray[i]);
  }
}

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infantObj) {
    this.infantCount++
    if(this.disposition === 'Vengeful') {
      infantObj.disposition = 'Malicious';
      this.humanWards.push(infantObj);
    }
    
    if(this.infantCount > 2){
      this.disposition = 'Good natured';
    }

    return infantObj;
    }
}

module.exports = Fairy;
