"use strict";
// Generics Interface
// This allows us to create reusable components
// Generics provide a way to make components work with any data type and not restrict to one data type
// This allows users to consume these components with their own data types
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
var stringBox = { contents: "Hello, World!" };
var numberBox = { contents: 42 };
console.log(stringBox.contents); // Output: Hello, World!
console.log(numberBox.contents); // Output: 42
console.log("-------------------------------------");
var pair = { first: "Age", second: 30 };
console.log(pair); // Output: { first: 'Age', second: 30 }
console.log("-------------------------------------");
var InMemoryRepository = /** @class */ (function () {
    function InMemoryRepository() {
        this.items = [];
    }
    InMemoryRepository.prototype.add = function (item) {
        this.items.push(item);
    };
    InMemoryRepository.prototype.getById = function (id) {
        return this.items[id] || null;
    };
    InMemoryRepository.prototype.getAll = function () {
        return this.items;
    };
    return InMemoryRepository;
}());
var userRepository = new InMemoryRepository();
userRepository.add({ name: "Alice", age: 30 });
userRepository.add({ name: "Bob", age: 25 });
console.log(userRepository.getById(0)); // Output: { name: 'Alice', age: 30 }
console.log(userRepository.getAll()); // Output: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]
console.log("-------------------------------------");
var SqlRepository = /** @class */ (function () {
    function SqlRepository() {
        this.items = [];
    }
    SqlRepository.prototype.add = function (item) {
        this.items.push(item);
    };
    SqlRepository.prototype.getById = function (id) {
        return this.items.find(function (item) { return item.id === id; }) || null;
    };
    SqlRepository.prototype.getAll = function () {
        return this.items;
    };
    return SqlRepository;
}());
var productRepository = new SqlRepository();
productRepository.add({ id: 1, name: "Laptop" });
productRepository.add({ id: 2, name: "Phone" });
console.log(productRepository.getById(1)); // Output: { id: 1, name: 'Laptop' }
console.log(productRepository.getAll()); // Output: [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }]
console.log("-------------------------------------");
function fetchData(url) {
    return new Promise(function (resolve) {
        // Simulate fetching data
        setTimeout(function () {
            resolve({ data: {} });
        }, 1000);
    });
}
fetchData("https://api.example.com/user")
    .then(function (response) {
    console.log(response.data); // Output: {}
});
console.log("-------------------------------------");
var readonlyStringBox = { contents: "Immutable" };
console.log(readonlyStringBox.contents); // Output: Immutable
// readonlyStringBox.contents = "Change"; // Error: Cannot assign to 'contents' because it is a read-only property.
console.log("-------------------------------------");
// Exception Handling in TypeScript
function basicTryCatch() {
    try {
        // Code that may throw an error
        var result = 10 / 0; // This will not throw an error in JS/TS, but let's assume it does
        console.log("Result:", result);
    }
    catch (e) {
        console.log("Caught an error:", e.message);
    }
    finally {
        console.log("Finally block executed");
    }
}
function tryFinallyOnly() {
    try {
        console.log("Executing try block");
    }
    finally {
        console.log("Finally block executed without catch");
    }
}
// Note: In TypeScript/JavaScript, dividing by zero does not throw an error; it results in Infinity.
// To demonstrate exception handling, we can manually throw an error. 
// Hence, the divide function below throws an error when division by zero is attempted. 
// This is just for demonstration purposes.
// Example 1: Basic try-catch-finally
// Example 2: try-finally without catch
// Example 3: Function that throws error manually
// Example 4: Using custom error class
// Example 5: Type guarding inside catch block
// Example 1 and 2 are implemented above
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
    else if (e instanceof Error) {
        console.log("Caught generic Error:", e.message);
    }
}
console.log("\n--- 5. Guarded catch example ---");
guardedCatchExample();
/*Output:
--- 1. Basic try-catch-finally ---
Caught an error: Cannot divide by zero
Finally block executed

--- 2. try-finally without catch ---
Executing try block
Finally block executed without catch

--- 3. Manual throw example ---
Manual throw caught: Cannot divide by zero

--- 4. Custom error class example ---
Caught ArithmeticError: Custom: Division by zero is illegal

--- 5. Guarded catch example ---
Guarded catch: Example error
*/
console.log("=====================================");
var item1 = {
    productName: 0
};
console.log(item1);
var item2 = {
    productName: "Pen"
};
console.log(item2);
var item3 = {
    productName: false
};
console.log(item3);
