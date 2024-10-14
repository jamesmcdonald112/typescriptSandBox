interface Vehicle {
    year: number; // Any class that implements this instances variable must make it public.
    getMake(): string; // If you use a getter method, it allows you to make the instance variables private.
    allInfo(): string;
}

class Car implements Vehicle {
    public year: number; // Must be public
    private make: string; // Can be private as we have a getter.

    constructor(year: number, make: string) {
        this.year = year;
        this.make = make;
    }

    public getMake(): string {
        return this.make;
    }

    public allInfo(): string {
        return `${this.make} ${this.year}`;
    }
}

const myCar = new Car(2021, "Tesla");
console.log(myCar.allInfo());