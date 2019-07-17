class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false || name === 'Frodo';
  }

  celebrateBirthday() {
    this.age++;
    if(this.age > 32) {
      this.adult = true;
    }
    if(this.age > 100) {
      this.old = true;
    }
  }
}



module.exports = Hobbit;

//   constructor(name, age) {
//     this.name = name;
//     this.disposition = 'homebody';
//     this.age = 0;
//     this.isShort = true;
//     this.adult = false;
//     this.old = false;
//     this.hasRing = false;
//      if(this.name === 'Frodo') {
//        this.hasRing = true;
//      };
//   };
//
//   celebrateBirthday() {
//     this.age++;
//     if(this.age > 32) {
//       this.adult = true;
//     }
//     if(this.age > 100) {
//       this.old = true;
//     }
//   };
// };
//
// module.exports = Hobbit;
