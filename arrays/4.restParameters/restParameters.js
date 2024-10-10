"use strict";
function smush(firstString, ...otherStrings) {
    let output = firstString;
    for (let i = 0; i < otherStrings.length; i++) {
        output = output.concat(" " + otherStrings[i]);
    }
    return output;
}
console.log(smush("Hello", "World"));
