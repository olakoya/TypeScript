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
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited: $".concat(amount));
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew: $".concat(amount));
        }
        else {
            console.log("Invalid withdrawal amount.");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var myAccount = new BankAccount(1000);
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function () {
        return 0;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(function (shape) {
    console.log("Area:", shape.area());
});
/*
OUTPUT
Area: 78.53981633974483
Area: 24
*/
console.log("--------------------------------------------------");
// 3. Example of Abstraction
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var CarVehicle = /** @class */ (function (_super) {
    __extends(CarVehicle, _super);
    function CarVehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarVehicle.prototype.start = function () {
        console.log("Car started.");
    };
    CarVehicle.prototype.stop = function () {
        console.log("Car stopped.");
    };
    return CarVehicle;
}(Vehicle));
var myVehicle = new CarVehicle();
myVehicle.start(); // Car started.
myVehicle.stop(); // Car stopped.
/*
OUTPUT
Car started.
Car stopped.
*/
console.log("--------------------------------------------------");
// 4. Example of Abstraction
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    return Appliance;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashingMachine.prototype.turnOn = function () {
        console.log("Washing Machine is now ON.");
    };
    WashingMachine.prototype.turnOff = function () {
        console.log("Washing Machine is now OFF.");
    };
    return WashingMachine;
}(Appliance));
var myAppliance = new WashingMachine();
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
var RectangleOverload = /** @class */ (function () {
    function RectangleOverload(width, height) {
        this.width = width || 1; // Default width is 1
        this.height = height || 1; // Default height is 1
    }
    RectangleOverload.prototype.area = function () {
        return this.width * this.height;
    };
    return RectangleOverload;
}());
var rect1 = new RectangleOverload();
console.log("Area of rect1 (default):", rect1.area()); // Area of rect1 (default): 1
var rect2 = new RectangleOverload(4, 5);
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
