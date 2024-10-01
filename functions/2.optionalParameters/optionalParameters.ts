// The question mark allows the parameter to be optional.
function greetName(name?: string) {
    console.log(`Hello ${name || 'Anonymous'}`);
}

greetName();
greetName("James");