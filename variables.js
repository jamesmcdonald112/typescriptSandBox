"use strict";
// Reassiging a variable to a value of a different type does not work in Typescript
let order = 'first';
// order = 1; this will cause an error.
// ANY 
// If a variable is declared without being assigned an initial value, TypeScript will consider this variable to be of type any
// This means it can be assigned and reassigned any value and TypeScript won't give an error if the types do not match later on.
let onOrOff;
onOrOff = 1;
onOrOff = false;
console.log("Working");
