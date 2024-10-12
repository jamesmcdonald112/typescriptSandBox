class Name {
    // properties / Instance variables
    private firstName?: string; // ? - means it can be undefined
    private surname!: string; // ! means it will be defined evenutally before being accessed.
    private address: string | null = null; // assign that it has no value.

    public constructor(firstName: string, surname: string) {
        this.firstName = firstName;
        this.surname = surname;
    }


    // Methods
    public printName() {
        console.log(`${this.firstName} ${this.surname}`);
    }

    public updateName(firstName: string, surname: string): void {
        this.firstName = firstName;
        this.surname = surname;
    }

    public getFirstName() {
        return this.firstName;
    }

}

let john = new Name("John", "Doe");

john.printName();

john.updateName("Brian", "Murphy");

john.printName();

console.log(john.getFirstName());

