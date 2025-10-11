// Constructor Overloading in TypeScript
// Constructor overloading allows a class to have multiple constructors with different parameter lists.
// This example demonstrates how to implement constructor overloading in a TypeScript class.
// Note: TypeScript does not support multiple constructors directly, but we can achieve similar functionality using optional parameters and type unions.
// class Person {
//     name: string;
//     age: number;
//     address: string;
//     // Single constructor with optional parameters (Overloading Signature Simulation) covering all the possible cases/scenarios
//     constructor(); // No parameters or arguments
//     constructor(name: string); // One parameter or single argument
//     constructor(name: string, age: number); // Two parameters or two arguments
//     constructor(name: string, age: number, address: string); // Three parameters or three arguments
//     // Actual constructor implementation (Single Implementation)    
//     constructor(name?: string, age?: number, address?: string) {
//         this.name = name || "Unknown";
//         this.age = age || 0;
//         this.address = address || "Not Provided";
//     }
//     displayInfo(): void {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
//     }
// }
// // Creating instances using different constructor signatures
// const person1 = new Person();
// const person2 = new Person("Alice");
// const person3 = new Person("Bob", 30);
// const person4 = new Person("Charlie", 25, "123 Main St");
// // Displaying information of each person
// person1.displayInfo(); // Name: Unknown, Age: 0, Address: Not Provided
// person2.displayInfo(); // Name: Alice, Age: 0, Address: Not Provided
// person3.displayInfo(); // Name: Bob, Age: 30, Address: Not Provided
// person4.displayInfo(); // Name: Charlie, Age: 25, Address: 123 Main St
/*
Output:
Name: Unknown, Age: 0, Address: Not Provided
Name: Alice, Age: 0, Address: Not Provided
Name: Bob, Age: 30, Address: Not Provided
Name: Charlie, Age: 25, Address: 123 Main St
*/
// Another 
var Person = /** @class */ (function () {
    // Actual constructor implementation (Single Implementation)    
    function Person(name, age, address) {
        if (name) {
            this.name = name;
        }
        else {
            this.name = "Unknown";
        }
        if (age) {
            this.age = age;
        }
        else {
            this.age = 0;
        }
        if (address) {
            this.address = address;
        }
        else {
            this.address = "Not Provided";
        }
    }
    Person.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Address: ").concat(this.address));
    };
    return Person;
}());
// Creating instances using different constructor signatures
var person1 = new Person();
var person2 = new Person("Alice");
var person3 = new Person("Bob", 30);
var person4 = new Person("Charlie", 25, "123 Main St");
// Displaying information of each person
person1.displayInfo(); // Name: Unknown, Age: 0, Address: Not Provided
person2.displayInfo(); // Name: Alice, Age: 0, Address: Not Provided
person3.displayInfo(); // Name: Bob, Age: 30, Address: Not Provided
person4.displayInfo(); // Name: Charlie, Age: 25, Address: 123 Main St
/*
Output:
Name: Unknown, Age: 0, Address: Not Provided
Name: Alice, Age: 0, Address: Not Provided
Name: Bob, Age: 30, Address: Not Provided
Name: Charlie, Age: 25, Address: 123 Main St
*/
