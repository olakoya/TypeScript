"use strict";
// =====================
// 📐 INTERFACES
// =====================
// An interface in TypeScript is a syntactical contract that an entity should conform to. 
// It defines the shape of an object, specifying what properties and methods it should have.
// Interfaces are used to type-check whether an object adheres to a specific structure, ensuring that it has the required properties and methods with the correct types.
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
Object.defineProperty(exports, "__esModule", { value: true });
var human = {
    name: "Alice",
    age: 30,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    }
};
human.greet(); // Output: Hello, my name is Alice and I am 30 years old.
var add = function (x, y) { return x + y; };
console.log(add(5, 3));
var staff = {
    name: "Bob",
    age: 25,
    employeeId: 101,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old and my employee ID is ").concat(this.employeeId, "."));
    }
};
staff.greet(); // Output: Hello, my name is Bob, I am 25 years old and my employee ID is 101.
/*
Output:
Hello, my name is Alice and I am 30 years old.
8
Hello, my name is Bob, I am 25 years old and my employee ID is 101.
*/
console.log("=====================================");
var item = {
    id: 101,
    name: "Laptop"
};
var item2 = {
    id: 200,
    name: "Iphone"
};
console.log(item.id);
console.log(item2.id);
var user = {
    name: "Pranav",
    age: 28,
    greet: function () {
        console.log("Hi, I'm ".concat(this.name));
    }
};
user.greet();
var user2 = {
    age: 25,
    move: function () {
        console.log("Moving");
    },
    fly: function () {
        console.log("Flying");
    }
};
user2.move();
user2.fly();
var Drone = /** @class */ (function () {
    function Drone(age) {
        this.age = age;
    }
    Drone.prototype.move = function () {
        console.log("Drone is moving on ground.");
    };
    Drone.prototype.fly = function () {
        console.log("Drone is flying in the sky.");
    };
    Drone.prototype.goByRoad = function () {
        console.log("Go By Road");
    };
    return Drone;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.fly = function () {
        console.log("Flying");
    };
    Hero.prototype.move = function () {
        console.log("Moving");
    };
    return Hero;
}(Drone));
var myDrone = new Drone(25);
console.log(myDrone.age);
myDrone.move();
myDrone.fly();
myDrone.goByRoad();
