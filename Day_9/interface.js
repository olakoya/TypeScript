// INTERFACE.TS
// An interface in TypeScript is a syntactical contract that an entity should conform to. It defines the shape of an object, specifying what properties and methods it should have.
// Interfaces are used to type-check whether an object adheres to a specific structure, ensuring that it has the required properties and methods with the correct types.
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
