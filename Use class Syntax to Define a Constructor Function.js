//Use class Syntax to Define a Constructor Function
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable  {
  constructor(name){
    this.name = name;
  }
}
const zeus = new Vegetable ('name');
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
