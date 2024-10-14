function mySandwhich(param1: string, param2: string): Promise<any> {
    console.log(`Started eating my sandwhich.\n\nIt has: ${param1}, ${param2}`);

    // Creating a new Promise
    let prom = new Promise(function(resolve, reject) {
        let err: boolean = false;  // This controls if the promise will resolve or reject
        if (err) {
            reject("\nPromise rejected: Did not finish eating mySandwhich. It was too much");
        } else {
            resolve("\nPromise resolved: Finished eating my sandwhich");
        }
    });

    // Handling the result of the promise
    prom.then((res) => {
        console.log(res);  // This runs if the promise is resolved
    }).catch((res) => {
        console.log(res);  // This runs if the promise is rejected
    });

    return prom;  // Return the promise
}

let x = mySandwhich("Cheese", "Tomato");
console.log(x);  // Logs the promise object immediately

console.log("Finished Program");

/*
Started eating my sandwhich.

It has: Cheese, Tomato
Promise { '\nPromise resolved: Finished eating my sandwhich' }
Finished Program

Promise resolved: Finished eating my sandwhich
*/