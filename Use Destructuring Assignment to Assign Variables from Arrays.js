//Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line make sure you use barackets around your Arrays
  ([a,b] = [b,a]);
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
