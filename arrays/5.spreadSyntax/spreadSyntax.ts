// An array of numbers past as an arguement to Math.max
let numbers = [1, 2, 3,];
console.log(Math.max(...numbers));

// An example using tuples.
let tuple: [number, string, boolean] = [42, "hello", true];

function display(a: number, b: string, c: boolean) {
    console.log(`Number: ${a}, String: ${b}, Boolean: ${c}`);
}

display(1, "James", true);


// Codecademy example
function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if(hasFlair){
      console.log('I do it with flair!');
    }
  }
  
  let danceMoves: [string, number, boolean][] = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
  ];
  
  danceMoves.forEach( move => performDanceMove(...move));