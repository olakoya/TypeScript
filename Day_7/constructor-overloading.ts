// constructor-overloading-demo.ts

// What is Constructor Overloading?
// Constructor overloading is a feature that allows a class to have multiple constructors with different parameter lists.
// This enables the creation of objects in different ways, depending on the arguments passed during instantiation.
//Constructor can have 0 parameters, 1 parameter, 2 parameters, and so on.

// Example of Constructor Overloading in TypeScript:

class Rectangle {
    width: number; // instance variable
    height: number;

    // Overloaded Constructors
    constructor();
    constructor(width: number, height: number); // constructor variable
    constructor(size: number);
    constructor(widthOrSize?: number, height?: number) {
        if (widthOrSize === undefined && height === undefined) {
            // Default constructor
            this.width = 1;
            this.height = 1;
        } else if (height === undefined) {
            // Single parameter constructor (square)
            this.width = widthOrSize!;
            this.height = widthOrSize!;
        } else {
            // Two parameter constructor (rectangle)
            this.width = widthOrSize!;
            this.height = height;
        }
    }

    // Method to calculate area
    area(): number {
        return this.width * this.height;
    }
}

// Creating instances using different constructors
let rectDefault = new Rectangle();
console.log("Area of default rectangle (1x1):", rectDefault.area()); // Area of default rectangle (1x1): 1

let rectSquare = new Rectangle(4);
console.log("Area of square (4x4):", rectSquare.area()); // Area of square (4x4): 16

let rectRectangle = new Rectangle(4, 5);
console.log("Area of rectangle (4x5):", rectRectangle.area()); // Area of rectangle (4x5): 20

/*
OUTPUT
Area of default rectangle (1x1): 1
Area of square (4x4): 16
Area of rectangle (4x5): 20
*/
console.log("--------------------------------------------------");

// Example of Inheritance

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let myDog: Animal = new Dog();
myDog.speak(); // Animal speaks
// myDog.bark(); // Error: Property 'bark' does not exist on type 'Animal'.

/*
OUTPUT
Animal speaks
*/
console.log("--------------------------------------------------");

class Appliance {
    turnOn() {
        console.log("Appliance is now ON.");
    }

    turnOff() {
        console.log("Appliance is now OFF.");
    }
}       
let myAppliance: Appliance = new Appliance();
myAppliance.turnOn(); // Washing Machine is now ON.
myAppliance.turnOff(); // Washing Machine is now OFF.


// Appliance class is a base class for various appliances like WashingMachine, Refrigerator, etc.
// Each derived class can have its own implementation of turnOn and turnOff methods.    
// This demonstrates polymorphism where the same method can have different behaviors based on the object type.