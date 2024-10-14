"use strict";
function mySandwhich(param1, param2) {
    console.log(`Started eating my sandwhich.\n\nIt has: ${param1}, ${param2}`);
    let prom = new Promise(function (resolve, reject) {
        let err = false;
        if (err)
            reject("\nPromise rejected: Did not finish eating mySandwhich. It was too much");
        else
            resolve("\nPromise resolved: Finished eating my sandwhich");
    });
    prom.then((res) => {
        console.log(res);
    }).catch((res) => {
        console.log(res);
    });
    return prom;
}
let x = mySandwhich("Cheese", "Tomato");
console.log(x);
console.log("Finished Program");
