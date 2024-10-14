"use strict";
var Doors;
(function (Doors) {
    Doors[Doors["ThreeDoor"] = 3] = "ThreeDoor";
    Doors[Doors["FiveDoor"] = 5] = "FiveDoor";
})(Doors || (Doors = {}));
class Truck {
    constructor(year, seats) {
        this.year = year;
        this.seats = seats;
    }
    getYear() {
        return this.year;
    }
    getSeats() {
        return this.seats;
    }
    toString() {
        return `
        Year: ${this.getYear()}
        Seats: ${this.getSeats()}
        `;
    }
}
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday"; // Will be 3 by default.
})(Days || (Days = {}));
let toyota = new Truck(2021, Doors.ThreeDoor);
console.log(toyota.toString());
console.log(Doors[3]);
