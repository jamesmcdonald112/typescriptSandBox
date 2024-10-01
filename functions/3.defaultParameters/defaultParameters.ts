
function hello(name = 'Anonymous') {
    console.log(`Hello ${name}`);
}

hello();
hello("James");


//hello(1);
// This will not work as the type is set to string by assigning a string value as an arguement