// INTERFACE.TS
// An interface in TypeScript is a syntactical contract that an entity should conform to. It defines the shape of an object, specifying what properties and methods it should have.
// Interfaces are used to type-check whether an object adheres to a specific structure, ensuring that it has the required properties and methods with the correct types.

// Example:
interface Person {
    name: string;
    age: number;
    greet(): void;
}

const human: Person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};


human.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Interfaces can also be used to define function types
interface Add {
    (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;
console.log(add(5, 3));

interface Employee extends Person {
    employeeId: number;
}

interface Staff extends Employee {
    greet(): void;
}

const staff: Staff = {
    name: "Bob",
    age: 25,
    employeeId: 101,
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and my employee ID is ${this.employeeId}.`);
    }
};

staff.greet(); // Output: Hello, my name is Bob, I am 25 years old and my employee ID is 101.

/*
Output:
Hello, my name is Alice and I am 30 years old.
8
Hello, my name is Bob, I am 25 years old and my employee ID is 101.
*/  