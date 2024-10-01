"use strict";
// The return type will infer a number
function getRandomNumber() {
    return Math.random();
}
const myVar = getRandomNumber(); // works no problem as no type was set
// Causes an error as the return type is a number
// const myVar2: string =  getRandomNumber();
