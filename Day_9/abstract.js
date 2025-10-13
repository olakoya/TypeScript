// ABSTRACT-DEMO.TS//
// Abstract is a class that cannot be instantiated directly. It is meant to be subclassed, and it can contain abstract methods that must be implemented by subclasses.
// Abstract classes are useful for defining a common interface and shared behavior for a group of related classes.
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
// Example:
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("The animal moves.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("The dog barks.");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("The cat meows.");
    };
    return Cat;
}(Animal));
var myDog = new Dog();
myDog.makeSound(); // Output: The dog barks.
myDog.move(); // Output: The animal moves.
var myCat = new Cat();
myCat.makeSound(); // Output: The cat meows.
myCat.move(); // Output: The animal moves.
// Abstract classes cannot be instantiated directly
// const myAnimal = new Animal(); // Error: Cannot create an instance of an abstract class.
/*
Output:
The dog barks.
The animal moves.
The cat meows.
The animal moves.
*/
