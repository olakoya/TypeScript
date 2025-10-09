// Method Overloading in TypeScript
// Method overloading allows a class to have multiple methods with the same name but different parameters.
// This is useful when you want to perform similar operations with different types or numbers of arguments.
// Here's an example of method overloading
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Method implementation
    Calculator.prototype.add = function (a, b, c) {
        if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
            return a + b + c; // Adding three numbers
        }
        else if (typeof a === 'number' && typeof b === 'number') {
            return a + b; // Adding two numbers
        }
        else if (typeof a === 'string' && typeof b === 'string') {
            return a + b; // Concatenating two strings
        }
        throw new Error('Invalid arguments');
    };
    return Calculator;
}());
// Usage
var calculator = new Calculator();
console.log(calculator.add(5, 10)); // Output: 15 (Adding two numbers)
console.log(calculator.add('Hello, ', 'World!')); // Output: Hello, World! (Concatenating two strings)
console.log(calculator.add(5, 10, 15)); // Output: 30 (Adding three numbers)xample:
/*
Output:
15
Hello, World!
30
*/
// Example 2
var MethodOL2 = /** @class */ (function () {
    function MethodOL2() {
    }
    // ✅ Implementation
    MethodOL2.prototype.greet = function (arg) {
        if (typeof arg === 'string') {
            return "Hello, ".concat(arg, "!");
        }
        else if (typeof arg === 'number') {
            return "Hello! (repeated ".concat(arg, " times)");
        }
        else {
            throw new Error("Invalid argument type for greet");
        }
    };
    // ✅ Implementation
    MethodOL2.prototype.add = function (a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            console.log("Returning string concatenation");
            return a + b;
        }
        else if (typeof a === 'number' && typeof b === 'number') {
            console.log("Returning numeric addition");
            return a + b;
        }
        else {
            throw new Error("Invalid argument types for add");
        }
    };
    // ✅ Simple logging method
    MethodOL2.prototype.log = function (message, level) {
        if (level === void 0) { level = "INFO"; }
        console.log("[".concat(level, "] ").concat(message));
    };
    return MethodOL2;
}());
// ✅ Usage
var mol = new MethodOL2();
console.log(mol.greet("Ola")); // Hello, Ola!
console.log(mol.greet(3)); // Hello! (repeated 3 times)
mol.log("This is an info message");
mol.log("This is a warning message", "WARN");
console.log(mol.add(5, 10)); // 15
console.log(mol.add('Hello, ', 'Ola!')); // Hello, Ola!
