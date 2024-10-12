class Person {
    private firstName!: string;
    private surname!: string;

    public constructor(firstName: string, surname: string) {
        this.firstName = firstName;
        this.surname = surname;
    }

    public getFullName() {
        return `${this.firstName} ${this.surname}`;
    }
}

class Employee extends Person {
    private salary!: number;

    public constructor(firstName: string, surname: string, salary: number) {
        super(firstName, surname);
        this.salary = salary;
    }

    public getDetails() {
        return `${this.getFullName()} ${this.salary}`;
    }
}


const dylan = new Employee("Dylan", "Doe", 50_000);
let details = dylan.getDetails();
console.log(details);
