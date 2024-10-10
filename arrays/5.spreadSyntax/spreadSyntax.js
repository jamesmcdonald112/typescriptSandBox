"use strict";
// An array of numbers past as an arguement to Math.max
let numbers = [1, 2, 3,];
console.log(Math.max(...numbers));
// An example using tuples.
let tuple = [42, "hello", true];
function display(a, b, c) {
    console.log(`Number: ${a}, String: ${b}, Boolean: ${c}`);
}
display(1, "James", true);
// Codecademy example
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if (hasFlair) {
        console.log('I do it with flair!');
    }
}
let danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];
danceMoves.forEach(move => performDanceMove(...move));
