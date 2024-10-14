"use strict";
class Person {
    constructor(firstName, surname) {
        this.firstName = firstName;
        this.surname = surname;
    }
    getFullName() {
        return `${this.firstName} ${this.surname}`;
    }
}
class Employee extends Person {
    constructor(firstName, surname, salary) {
        super(firstName, surname);
        this.salary = salary;
    }
    getDetails() {
        return `${this.getFullName()} ${this.salary}`;
    }
}
const dylan = new Employee("Dylan", "Doe", 50000);
let details = dylan.getDetails();
console.log(details);
