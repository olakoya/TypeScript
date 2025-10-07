 // What is a Class?
// A class is a blueprint for creating objects with specific properties and methods.
// It allows you to encapsulate data and behavior related to that data in a single structure.

// Example of a Class in TypeScript:    
class Person {
    // Properties
    name!: string;
    age!: number;

    // What is a Methods in a Class?
    // Methods are functions defined within a class that describe the behaviors of the objects created from the class.

    // Example of a Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// What is an Object?
// An object is an instance of a class. It is created based on the structure defined by the class and can hold specific values for its properties.

// Example of a Class and Object in TypeScript:

class Car {
    // Properties
    make: string;
    model: string;
    year: number;

    // What is a Constructor?
    // A constructor is a special method that is called when an object is instantiated from a class.
    // It is used to initialize the properties of the object.

    // Example of a Constructor
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method
    displayInfo() {
        console.log(`Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Creating an object (instance) of the Car class
let myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayInfo(); // Output: Car Make: Toyota, Model: Corolla, Year: 2020

// Creating another object of the Person class
let person1 = new Person();
person1.name = "Alice";
person1.age = 30;
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

let person2 = new Person();
person2.name = "Bob";
person2.age = 25;
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

/*
OUTPUT  
Car Make: Toyota, Model: Corolla, Year: 2020
Hello, my name is Alice and I am 30 years old.
Hello, my name is Bob and I am 25 years old.
*/

// string-functions-demo.ts

let message123: string = " Hello, TypeScript! TypeScript is great for large-scale applications. ";

console.log("Original message:", message123); // Using console.log to display the message
console.log("Message length:", message123.length); // Length of the string
console.log("Uppercase message:", message123.toUpperCase()); // Convert to uppercase

// What is OOPS?
// OOPS stands for Object-Oriented Programming System. It is a programming paradigm that uses "objects" to design software.
// The main principles of OOPS are Encapsulation, Inheritance, Polymorphism, and Abstraction.

// Example of OOPS in TypeScript:
class Animal {
    // Property
    name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Method
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Inheritance: Dog class inherits from Animal class
class Dog extends Animal {
    // Method
    bark() {
        console.log(`${this.name} barks loudly!`);
    }
}

// Creating an object of the Dog class
let myDog = new Dog("Buddy");
myDog.speak(); // Output: Buddy makes a noise.
myDog.bark(); // Output: Buddy barks loudly!    


/*
OUTPUT
Car Make: Toyota, Model: Corolla, Year: 2020
Hello, my name is Alice and I am 30 years old.
Hello, my name is Bob and I am 25 years old.
Original message:  Hello, TypeScript! TypeScript is great for large-scale applications. 
Message length: 70
Uppercase message:  HELLO, TYPESCRIPT! TYPESCRIPT IS GREAT FOR LARGE-SCALE APPLICATIONS. 
Buddy makes a noise.
Buddy barks loudly!
*/

// Types of OOPS
// 1. Encapsulation: Bundling data and methods that operate on that data within a single unit (class).
// 2. Inheritance: Mechanism where a new class can inherit properties and methods from an existing class.
// 3. Polymorphism: Ability to present the same interface for different underlying data types.
// 4. Abstraction: Hiding complex implementation details and showing only the necessary parts of the object.

// 1. Example of Encapsulation
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

let myAccount = new BankAccount(1000);
myAccount.deposit(500); // Deposited: $500
myAccount.withdraw(200); // Withdrew: $200
console.log("Current Balance:", myAccount.getBalance()); // Current Balance: 1300

/*
OUTPUT
Deposited: $500
Withdrew: $200
Current Balance: 1300
*/

console.log("--------------------------------------------------");

// Example of Polymorphism
class Shape {
    area(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

let shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => {
    console.log("Area:", shape.area());
});

/*
OUTPUT
Area: 78.53981633974483
Area: 24
*/
console.log("--------------------------------------------------");

// 3. Example of Abstraction
abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
}

class CarVehicle extends Vehicle {
    start() {
        console.log("Car started.");
    }

    stop() {
        console.log("Car stopped.");
    }
}

let myVehicle: Vehicle = new CarVehicle();
myVehicle.start(); // Car started.
myVehicle.stop(); // Car stopped.

/*
OUTPUT
Car started.
Car stopped.
*/      
console.log("--------------------------------------------------");

// 4. Example of Abstraction
abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

class WashingMachine extends Appliance {
    turnOn() {
        console.log("Washing Machine is now ON.");
    }

    turnOff() {
        console.log("Washing Machine is now OFF.");
    }
}

let myAppliance: Appliance = new WashingMachine();
myAppliance.turnOn(); // Washing Machine is now ON.
myAppliance.turnOff(); // Washing Machine is now OFF.

/*
OUTPUT
Washing Machine is now ON.
Washing Machine is now OFF.
*/
console.log("--------------------------------------------------");

// Example of Inheritance is already shown in the Dog and Animal classes above.
// Dog class inherits from Animal class.
// Dog class can use the speak method from Animal class and also has its own method bark.

// Example of Constructor Overloading

class RectangleOverload {
    width: number;
    height: number;

    // Constructor Overloading
    constructor();
    constructor(width: number, height: number);
    constructor(width?: number, height?: number) {
        this.width = width || 1; // Default width is 1
        this.height = height || 1; // Default height is 1
    }

    area(): number {
        return this.width * this.height;
    }
}

let rect1 = new RectangleOverload();
console.log("Area of rect1 (default):", rect1.area()); // Area of rect1 (default): 1

let rect2 = new RectangleOverload(4, 5);
console.log("Area of rect2 (4x5):", rect2.area()); // Area of rect2 (4x5): 20

/*
OUTPUT
Area of rect1 (default): 1
Area of rect2 (4x5): 20
*/
console.log("--------------------------------------------------");


// Summary
// In this lesson, we learned about Classes, Objects, Methods, and Constructors in TypeScript.
// We also explored the principles of Object-Oriented Programming (OOPS) including Encapsulation, Inheritance, Polymorphism, and Abstraction with practical examples.
// We saw how to create classes, instantiate objects, and define methods and constructors.      
// Additionally, we demonstrated string functions and their usage in TypeScript.
    