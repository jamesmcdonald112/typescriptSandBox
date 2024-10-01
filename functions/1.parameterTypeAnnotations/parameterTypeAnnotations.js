"use strict";
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('James'); // Prints hello James
// greet(1223);
//  Error: arguement '1223' is not assignable to parameter of type 'string'
// Variables without a type are of type any but it is good to stat this clearly.
function printKeyValue(key, value) {
    console.log(`${key}: ${value}`);
}
printKeyValue('James', 123);
printKeyValue('Conor', 'James');
