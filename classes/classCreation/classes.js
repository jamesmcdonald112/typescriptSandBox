"use strict";
class Name {
    constructor(firstName, surname) {
        this.address = null; // assign that it has no value.
        this.firstName = firstName;
        this.surname = surname;
    }
    // Methods
    printName() {
        console.log(`${this.firstName} ${this.surname}`);
    }
    updateName(firstName, surname) {
        this.firstName = firstName;
        this.surname = surname;
    }
    getFirstName() {
        return this.firstName;
    }
}
let john = new Name("John", "Doe");
john.printName();
john.updateName("Brian", "Murphy");
john.printName();
console.log(john.getFirstName());
