// exception-handling-examples.ts
// This is a TypeScript file demonstrating various ways to handle exceptions and errors in TypeScript.
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
// Type Assertions in TypeScript
// Type assertions are a way to tell the TypeScript compiler about the type of a variable when you have more information -
// about it than the compiler does. 
// They do not perform any runtime checks or conversions; they simply inform the compiler about the type you expect.
// as operator
var nameOfThePerson = "Yash";
console.log(nameOfThePerson.length);
var isMale = "true";
console.log(isMale);
var complexReturn = 5538;
console.log(complexReturn);
var complexNumber = "Yash";
console.log(complexNumber);
// instanceof
//typeof works on primitive data types like number string boolean etc.
// instanceof works on Compex Types like class, interface
var x = 222;
var newPerson = /** @class */ (function () {
    function newPerson() {
    }
    return newPerson;
}());
console.log(typeof x);
var np = new newPerson();
console.log(np instanceof newPerson);
// How to throw an Error
throw new Error("My File is not workin");
// 1. Basic try-catch-finally
function basicTryCatch() {
    try {
        console.log("Trying risky operation...");
        throw new Error("Something went wrong!");
    }
    catch (error) {
        console.log("Caught error:", error.message);
    }
    finally {
        console.log("This will always run (cleanup logic)");
    }
}
// 2. try-finally (without catch)
function tryFinallyOnly() {
    try {
        console.log("Performing task...");
        // throw new Error("Oops!"); // Uncomment to test error without catch
    }
    finally {
        console.log("Always executed even if there's an error");
    }
}
// ✅ 3. Function that throws error manually
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
// ✅ 4. Using custom error class
var ArithmeticError = /** @class */ (function (_super) {
    __extends(ArithmeticError, _super);
    function ArithmeticError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ArithmeticError";
        return _this;
    }
    return ArithmeticError;
}(Error));
function safeDivide(a, b) {
    if (b === 0) {
        throw new ArithmeticError("Custom: Division by zero is illegal");
    }
    return a / b;
}
// ✅ 5. Type guarding inside catch block
function guardedCatchExample() {
    try {
        throw new Error("Example error");
    }
    catch (e) {
        if (e instanceof Error) {
            console.log("Guarded catch:", e.message);
        }
        else {
            console.log("Unknown error type:", e);
        }
    }
}
// ✅ Run all examples
console.log("\n--- 1. Basic try-catch-finally ---");
basicTryCatch();
console.log("\n--- 2. try-finally without catch ---");
tryFinallyOnly();
console.log("\n--- 3. Manual throw example ---");
try {
    var result = divide(10, 0); // Change to 2 to test happy path
    console.log("Result:", result);
}
catch (e) {
    console.log("Manual throw caught:", e.message);
}
console.log("\n--- 4. Custom error class example ---");
try {
    var result = safeDivide(5, 0);
    console.log("Result:", result);
}
catch (e) {
    if (e instanceof ArithmeticError) {
        console.log("Caught ArithmeticError:", e.message);
    }
    else {
        console.log("Caught unknown error:", e);
    }
}
console.log("\n--- 5. Guarded catch example ---");
guardedCatchExample();
