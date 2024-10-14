"use strict";
class Car {
    constructor(year, make) {
        this.year = year;
        this.make = make;
    }
    getMake() {
        return this.make;
    }
    allInfo() {
        return `${this.make} ${this.year}`;
    }
}
const myCar = new Car(2021, "Tesla");
console.log(myCar.allInfo());
