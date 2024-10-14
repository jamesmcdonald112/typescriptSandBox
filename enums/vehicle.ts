interface Vehicle2 {
    getYear(): number;
    getSeats(): number;
}

enum Doors {
    ThreeDoor = 3,
    FiveDoor = 5
}

class Truck implements Vehicle2 {
    public constructor(private year: number, private seats: number){}

    public getYear(): number {
        return this.year;
    }

    public getSeats(): number {
        return this.seats;
    }

    public toString(): string {
        return `
        Year: ${this.getYear()}
        Seats: ${this.getSeats()}
        `;
    }

}

enum Days {
    Monday = 1,
    Tuesday, //Will be 2 by default
    Wednesday // Will be 3 by default.
}

let toyota = new Truck(2021, Doors.ThreeDoor);
console.log(toyota.toString());

let doors: string = Doors[3]; // ThreeDoor.