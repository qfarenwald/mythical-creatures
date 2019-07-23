class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(string) {
    for(var i = 0; i < this.riddles.length; i++){
    if(this.riddles[i].answer === string) {
      this.riddles.splice(i, 1);
      if(this.riddles.length > 0){
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
    } else {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${string}"???`
        }
      }
    }
    this.heroesEaten++;
  }
}


module.exports = Sphinx;

























// this.riddles = [];
// }
//
// collectRiddle(riddle) {
// this.riddles.push(riddle);
// if(this.riddles.length > 3) {
//   this.riddles.shift();
// }
// }
//
// attemptAnswer(correctAnswer) {
// if(this.riddles.answer === correctAnswer){
//   riddleIndex = this.riddles.indexOf(correctAnswer);
//   this.riddles.splice(riddleIndex, 1);
//   return this.riddles;
// }
// }
