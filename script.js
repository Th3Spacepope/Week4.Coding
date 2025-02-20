let myLetVariable = "hello";
const myConstVariable = 42;
let myArray = [10, "Banana", true];
myArray.push([1, 2, 3]);
myArray.push("Added String");
myArray.shift();
myArray[1] = 345;
myArray[3] = false;
let i = 0;
let o = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

let myScale = ["C", "D", "E", "F", "G", "A", "B"];
while (o < myScale.length) {
  console.log(typeof myScale[o]);
  o++;
}
console.log(myScale);



/*
SMW COMMENT
These next two while loops and be combined into a single while loop with if and else if statements.
Iterate through the entire Array just like you do in lines 17.

Also be careful about the difference between = and ==
= is the assignment operator
== is the equality test

 */
while ((myScale[3] = "F")) {
  myScale[3] = "F#";
  if ((myScale[3] = "F#")) {
    break;
  }
}
while ((myScale[6] = "B")) {
  myScale[6] = "Bb";
  if ((myScale[6] = "Bb")) {
    break;
  }
}
console.log(myScale);
