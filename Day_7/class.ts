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