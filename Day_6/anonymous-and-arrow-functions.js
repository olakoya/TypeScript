// function-parameters-demo.ts
// 1a. Basic Function with Signature and return type
function add(a, b) {
    return a + b;
}
// b. Anonymous Function assigned to a variable
var multiply = function (a, b) {
    return a * b;
};
// c. Arrow Function with concise syntax
var subtract = function (a, b) { return a - b; };
// d. Arrow Function with block body
var divide = function (a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};
// 2a. Basic Function with Signature and no return type
function addWithoutReturn(a, b) {
    console.log(a + b);
}
addWithoutReturn(2, 3);
// b. Anonymous Function with no return type
var multiplyWithoutReturn = function (a, b) {
    console.log(a * b);
};
multiplyWithoutReturn(2, 3);
// c. Arrow Function with no return type
var subtractWithoutReturn = function (a, b) {
    console.log(a - b);
};
subtractWithoutReturn(5, 3);
// d. Arrow Function with block body and no return type
var divideWithoutReturn = function (a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
        return;
    }
    console.log(a / b);
};
divideWithoutReturn(6, 3);
divideWithoutReturn(6, 0);
// Example usage
console.log("Add:", add(2, 3)); // 5
console.log("Multiply:", multiply(2, 3)); // 6
console.log("Subtract:", subtract(5, 3)); // 2
console.log("Divide:", divide(6, 3)); // 2
// console.log("Divide by zero:", divide(6, 0)); // Error: Division by zero is not allowed.
// 3. Optional Parameters
function greet(name, title) {
    if (title) {
        return 'Hello, ${name}';
    }
    return 'Hello, ${name}';
}
console.log("Greet with title:", greet("Alice", "Dr.")); // Hello, Dr. Alice
console.log("Greet without title:", greet("Bob")); // Hello, Bob
// 4. Default Parameters
function greetWithDefault(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name);
}
console.log("With custom greeting:", greetWithDefault("Eve", "Welcome")); // Welcome, Eve
console.log("With default greeting:", greetWithDefault("Eve")); // Hello, Eve
