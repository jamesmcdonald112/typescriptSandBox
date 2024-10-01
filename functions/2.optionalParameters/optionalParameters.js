"use strict";
// The question mark allows the parameter to be optional.
function greetName(name) {
    console.log(`Hello ${name || 'Anonymous'}`);
}
greetName();
greetName("James");
