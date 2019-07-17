class Wizard {
  constructor(wizObj) {
    this.name = wizObj.name;
    this.bearded = true;
      if(wizObj.bearded === false){
        this.bearded = false;
      }
    this.isRested = true;
    this.count = 0;
   }

   incantation(string) {
     return string.toUpperCase();
   }

   cast() {
     this.count++;
     if(this.count > 2) {
       this.isRested = false;
       return 'I SHALL NOT CAST!'
     } else {
       return 'MAGIC BULLET';
     }
  }
}

module.exports = Wizard;





// class Wizard {
//   constructor(wizObj) {
//     this.name = wizObj.name;
//     // this.name = wizObj['name'];
//     this.bearded = true;
//      if(wizObj.bearded === false) {
//        this.bearded = false;
//      }
//      this.isRested = true;
//      this.spell = 0;
//   }
//
//   incantation(string) {
//     return string.toUpperCase();
//   }
//
//   cast(string) {
//     this.spell++;
//     if(this.spell > 2) {
//       this.isRested = false;
//       return "I SHALL NOT CAST!"
//     }
//     return string;
//   }
// }
//
// module.exports = Wizard;
