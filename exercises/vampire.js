class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
  }
  drink(){
    this.thirsty = false;
  }
}



module.exports = Vampire;

// 1. read the test
// 2. will test fail?
// 3. run test
// 4. make it pass

//
// class Vampire {
//   constructor(name, pet, thirsty) {
//     // console.log(name);
//     this.name = name;
//     // console.log(pet);
//     if (pet === undefined){
//       this.pet = 'bat';
//     } else {
//       this.pet = pet;
//     }
//     // console.log(thirsty);
//     this.thirsty = true;
//   }
//
//   drink() {
//     this.thirsty = false;
//     console.log(thirsty);
//   }
// }
//
// module.exports = Vampire;
