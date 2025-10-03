// What is a Class?
// A class is a blueprint for creating objects with specific properties and methods.
// It allows you to encapsulate data and behavior related to that data in a single structure.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Example of a Class in TypeScript:    
var Person = /** @class */ (function () {
    function Person() {
    }
    // What is a Methods in a Class?
    // Methods are functions defined within a class that describe the behaviors of the objects created from the class.
    // Example of a Method
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// What is an Object?
// An object is an instance of a class. It is created based on the structure defined by the class and can hold specific values for its properties.
// Example of a Class and Object in TypeScript:
var Car = /** @class */ (function () {
    // What is a Constructor?
    // A constructor is a special method that is called when an object is instantiated from a class.
    // It is used to initialize the properties of the object.
    // Example of a Constructor
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method
    Car.prototype.displayInfo = function () {
        console.log("Car Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
// Creating an object (instance) of the Car class
var myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayInfo(); // Output: Car Make: Toyota, Model: Corolla, Year: 2020
// Creating another object of the Person class
var person1 = new Person();
person1.name = "Alice";
person1.age = 30;
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
var person2 = new Person();
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
var message123 = " Hello, TypeScript! TypeScript is great for large-scale applications. ";
console.log("Original message:", message123); // Using console.log to display the message
console.log("Message length:", message123.length); // Length of the string
console.log("Uppercase message:", message123.toUpperCase()); // Convert to uppercase
// What is OOPS?
// OOPS stands for Object-Oriented Programming System. It is a programming paradigm that uses "objects" to design software.
// The main principles of OOPS are Encapsulation, Inheritance, Polymorphism, and Abstraction.
// Example of OOPS in TypeScript:
var Animal = /** @class */ (function () {
    // Constructor
    function Animal(name) {
        this.name = name;
    }
    // Method
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a noise."));
    };
    return Animal;
}());
// Inheritance: Dog class inherits from Animal class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " barks loudly!"));
    };
    return Dog;
}(Animal));
// Creating an object of the Dog class
var myDog = new Dog("Buddy");
myDog.speak(); // Output: Buddy makes a noise.
myDog.bark(); // Output: Buddy barks loudly!    
/*
Car Make: Toyota, Model: Corolla, Year: 2020
Hello, my name is Alice and I am 30 years old.
Hello, my name is Bob and I am 25 years old.
Original message:  Hello, TypeScript! TypeScript is great for large-scale applications.
Message length: 70
Uppercase message:  HELLO, TYPESCRIPT! TYPESCRIPT IS GREAT FOR LARGE-SCALE APPLICATIONS.
Buddy makes a noise.
Buddy barks loudly!
Lowercase message:  hello, typescript! typescript is great for large-scale applications.
Substring (0, 5):  Hell
Index of 'Type': 8
Replace 'TypeScript' with 'JavaScript':  Hello, JavaScript! TypeScript is great for large-scale applications.
Trimmed message: Hello, TypeScript!
Trimmed: Hello, TypeScript! TypeScript is great for large-scale applications.
Split message by space: [
  '',
  'Hello,',
  'TypeScript!',
  'TypeScript',
  'is',
  'great',
  'for',
  'large-scale',
  'applications.',
  ''
]
Starts with 'Hello': true
Ends with 'TypeScript': false
Includes 'TypeScript'? true
Starts with 'Hello'? false
Ends with 'TypeScript'? false
Includes 'TypeScript'? true
Replaced 'TypeScript' with 'World Globally':  Hello, World Globally! World Globally is great for large-scale applications.
*/ 
