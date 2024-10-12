"use strict";
var _a;
// Declaring an empty array. Must use `[]` for String, Number, and Boolean.
let pets = [];
let ages = [];
let adults = [];
// Using `any[]` restricts the variable to being an array, where each element can be of any type (string, number, object, etc.).
// Without `[]`, the variable can hold any type of value, such as a string, number, boolean, function, object, or even an array.
let allInfo = []; // This is an array, but its elements can be of any type.
let allInfo2 = []; // This can be any type of value (here, it's an array, but it could be a string, number, etc.).
// An array with multiple elements
let nums = [1, 2, 3];
// Creating an array using the constructor. Creates 5 empty spaces and fills with the number 0.
let constructorArray = new Array(5).fill(0);
// Add elements to the array using assignment
constructorArray[5] = 1;
// Add elements to the array using push 
constructorArray.push(3);
// Remove the last element use pop. Two options with typescript
let lastElement = constructorArray.pop(); // 3
let lastElement2 = (_a = constructorArray.pop()) !== null && _a !== void 0 ? _a : 0; // Provide a fallback.
// ?? - This nullish coalescing operator. Provides a value if the first expression is null or undefined.
//Shift -  Remove the first element use
let petNames = ["Sammy", "Link", "Izzy"];
petNames.shift(); // [ 'Link', 'Izzy' ]
// Unshift -  Add an element to the start of an array
petNames.unshift("Sammy"); //[ 'Sammy', 'Link', 'Izzy' ]
// Check if an array has an element at a specified index
console.log(1 in constructorArray);
// Adding 3 back
constructorArray.push(3);
// Splice. Removes a section of the array, inclusive.
let spliceArray = constructorArray.splice(3, constructorArray.length);
[0, 0, 1, 3];
// constructor array now holds = [ 0, 0, 0 ];
// Splice can aso add elements anywhere into an array. The 0 means delete 0 elements.
petNames.splice(1, 0, "Henry");
// Slice - copies without modifying the orignal array. Exclusive.
let firstCats = petNames.slice(0, 2);
// Sorting - Converts elements to strings and sorts them lexiographically.
let randomNums = [4, 3, 2, 11]; // When sorted, 11 should be at the end
randomNums.sort(); // However, the result is [ 11, 2, 3, 4 ]
// Sorting numbers requires a compare function
randomNums = [4, 3, 2, 11];
randomNums.sort((a, b) => a - b); // [ 2, 3, 4, 11 ]
// This is how the compare function works:
// The compare function takes two arguments, (a and b), which represent two elements in the array.
// If the function returns:
//    - A negative number (a - b < 0): a comes before b (a is smaller than b).
//    - Zero (a - b === 0): a and b are considered equal.
//    - A positive number (a - b > 0): b comes before a (b is smaller than a).
// indexOf() function
let firstNames = ["James", "Chloe", "Brian"];
let chloeIndex = firstNames.indexOf("Chloe"); // 1
let conorIndex = firstNames.indexOf("Conor"); // -1
// Multidimensional array
let numberList = [[1, 2, 3], [4, 5, 6]];
// Outer forEach to iterate over the sub-array
numberList.forEach(subArray => {
    // Inner forEach to iterate over the numbers in each sub-array
    subArray.forEach(num => {
        console.log(num);
    });
});
// Iterate over a multidimensional array
for (let row = 0; row < numberList.length; row++) {
    for (let col = 0; col < numberList[row].length; col++) {
        console.log(numberList[row][col]);
    }
}
// Map - does not modify the original array but creates a new one.
let evenNums = [2, 4, 6, 8, 10];
// Use map to create a new array with each number doubled
let doubledNumbers = evenNums.map(num => num * 2); // [ 4, 8, 12, 16, 20 ]
