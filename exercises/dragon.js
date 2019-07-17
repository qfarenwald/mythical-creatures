class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.sheep = 0;
  }

  eat() {
    this.sheep++;
    if(this.sheep >= 3){
      this.hungry = false;
    }
  }
}

module.exports = Dragon;


// class Dragon {
//   constructor(name, rider, color) {
//     this.name = name;
//     this.rider = rider;
//     this.color = color;
//     this.hungry = true;
//     this.count = 0;
//   }
//
//   eat() {
//     this.count += 1;
//     // this.count = this.count + 1;
//     // this.count++;
//     if(this.count >= 3) {
//      this.hungry = false;
//    }
//   }
// };
//
//
//
// module.exports = Dragon;
