// =====================
// 📐 INTERFACES
// =====================
// An interface in TypeScript is a syntactical contract that an entity should conform to. 
// It defines the shape of an object, specifying what properties and methods it should have.
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
console.log("=====================================")

export {}

// class will have the implementation also - The Functions have implementation
// Although Interface is also a blueprint it doesn't have any implementation

interface Product {
    readonly id: number;
    name: string;
    description?: string;
}

let item: Product = {
    id: 101,
    name: "Laptop"
};

let item2: Product = {
    id: 200,
    name: "Iphone"
}

console.log(item.id)
console.log(item2.id)

interface Person {
    name: string;
    age: number;
    greet(): void;
}

const user: Person = {
    name: "Pranav",
    age: 28,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.greet();



interface Movable {
    move(): void;
}

interface Flyable extends Movable {
    age: number
    fly(): void;
}

interface Roadable {
    goByRoad(): void;
    move(): void;
}

interface Person {
    name: string;
    age: number;
    greet(): void;
}


let user2: Flyable = {
    age: 25,
    move(): void {
        console.log("Moving")
    },

    fly(): void {
        console.log("Flying")
    }
}
user2.move()
user2.fly()

class Drone implements Flyable,Roadable {
    age:number
    constructor(age:number) {
        this.age = age;
    }
    move(): void {
        console.log("Drone is moving on ground.");
    }

    fly(): void {
        console.log("Drone is flying in the sky.");
    }

    goByRoad(): void {
        console.log("Go By Road")
    }
}

abstract class Hero extends Drone implements Flyable {


    fly() {
        console.log("Flying")
    }

    move() {
        console.log("Moving")
    }

    abstract heroName(): string;
}

const myDrone = new Drone(25);
console.log(myDrone.age)
myDrone.move();
myDrone.fly();
myDrone.goByRoad();