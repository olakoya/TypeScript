// constructor-overloading-demo.ts
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
// What is Constructor Overloading?
// Constructor overloading is a feature that allows a class to have multiple constructors with different parameter lists.
// This enables the creation of objects in different ways, depending on the arguments passed during instantiation.
//Constructor can have 0 parameters, 1 parameter, 2 parameters, and so on.
// Example of Constructor Overloading in TypeScript:
var Rectangle = /** @class */ (function () {
    function Rectangle(widthOrSize, height) {
        if (widthOrSize === undefined && height === undefined) {
            // Default constructor
            this.width = 1;
            this.height = 1;
        }
        else if (height === undefined) {
            // Single parameter constructor (square)
            this.width = widthOrSize;
            this.height = widthOrSize;
        }
        else {
            // Two parameter constructor (rectangle)
            this.width = widthOrSize;
            this.height = height;
        }
    }
    // Method to calculate area
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// Creating instances using different constructors
var rectDefault = new Rectangle();
console.log("Area of default rectangle (1x1):", rectDefault.area()); // Area of default rectangle (1x1): 1
var rectSquare = new Rectangle(4);
console.log("Area of square (4x4):", rectSquare.area()); // Area of square (4x4): 16
var rectRectangle = new Rectangle(4, 5);
console.log("Area of rectangle (4x5):", rectRectangle.area()); // Area of rectangle (4x5): 20
/*
OUTPUT
Area of default rectangle (1x1): 1
Area of square (4x4): 16
Area of rectangle (4x5): 20
*/
console.log("--------------------------------------------------");
// Example of Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        console.log("Animal speaks");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Dog barks");
    };
    return Dog;
}(Animal));
var myDog = new Dog();
myDog.speak(); // Animal speaks
// myDog.bark(); // Error: Property 'bark' does not exist on type 'Animal'.
/*
OUTPUT
Animal speaks
*/
console.log("--------------------------------------------------");
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    Appliance.prototype.turnOn = function () {
        console.log("Appliance is now ON.");
    };
    Appliance.prototype.turnOff = function () {
        console.log("Appliance is now OFF.");
    };
    return Appliance;
}());
var myAppliance = new Appliance();
myAppliance.turnOn(); // Washing Machine is now ON.
myAppliance.turnOff(); // Washing Machine is now OFF.
// Appliance class is a base class for various appliances like WashingMachine, Refrigerator, etc.
// Each derived class can have its own implementation of turnOn and turnOff methods.    
// This demonstrates polymorphism where the same method can have different behaviors based on the object type.
