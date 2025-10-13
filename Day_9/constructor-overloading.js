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
console.log("---------------------------------------------------");
// More examples
var Bible = /** @class */ (function () {
    function Bible(book, chapter, verse) {
        this.book = book || "Genesis";
        this.chapter = chapter || 1;
        this.verse = verse || 1;
    }
    Bible.prototype.displayReference = function () {
        console.log("Book: ".concat(this.book, ", Chapter: ").concat(this.chapter, ", Verse: ").concat(this.verse));
    };
    return Bible;
}());
var ref1 = new Bible();
var ref2 = new Bible("Exodus");
var ref3 = new Bible("Psalms", 23);
var ref4 = new Bible("John", 3, 16);
ref1.displayReference(); // Book: Genesis, Chapter: 1, Verse: 1
ref2.displayReference(); // Book: Exodus, Chapter: 1, Verse: 1
ref3.displayReference(); // Book: Psalms, Chapter: 23, Verse: 1
ref4.displayReference(); // Book: John, Chapter: 3, Verse: 16
/*
Output:
Book: Genesis, Chapter: 1, Verse: 1
Book: Exodus, Chapter: 1, Verse: 1
Book: Psalms, Chapter: 23, Verse: 1
Book: John, Chapter: 3, Verse: 16
*/
//-------------------------------------------------------------------
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width || 1;
        this.height = height || 1;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rect1 = new Rectangle();
var rect2 = new Rectangle(5);
var rect3 = new Rectangle(4, 6);
console.log("Area of rect1: ".concat(rect1.area())); // Area of rect1: 1
console.log("Area of rect2: ".concat(rect2.area())); // Area of rect2: 5
console.log("Area of rect3: ".concat(rect3.area())); // Area of rect3: 24
/*
Output:
Area of rect1: 1
Area of rect2: 5
Area of rect3: 24
*/
//
