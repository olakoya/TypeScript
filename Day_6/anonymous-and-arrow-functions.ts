// function-parameters-demo.ts

// 1a. Basic Function with Signature and return type
function add(a: number, b: number): number {
    return a + b;
}

// b. Anonymous Function assigned to a variable
const multiply = function (a: number, b: number): number {
    return a * b;
};

// c. Arrow Function with concise syntax
const subtract = (a: number, b: number): number => a - b;

// d. Arrow Function with block body
const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};

// 2a. Basic Function with Signature and no return type
function addWithoutReturn(a: number, b: number): void {
    console.log(a+b);
}
addWithoutReturn(2,3);

// b. Anonymous Function with no return type
const multiplyWithoutReturn = function (a: number, b: number): void {
    console.log(a*b);
};
multiplyWithoutReturn(2,3);

// c. Arrow Function with no return type
const subtractWithoutReturn = (a: number, b: number): void => {
    console.log(a-b);
};
subtractWithoutReturn(5,3);

// d. Arrow Function with block body and no return type
const divideWithoutReturn = (a: number, b: number): void => {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
        return;
    }
    console.log(a/b);
};
divideWithoutReturn(6,3);
divideWithoutReturn(6,0);

// Example usage
console.log("Add:", add(2, 3)); // 5
console.log("Multiply:", multiply(2, 3)); // 6
console.log("Subtract:", subtract(5, 3)); // 2
console.log("Divide:", divide(6, 3)); // 2
// console.log("Divide by zero:", divide(6, 0)); // Error: Division by zero is not allowed.

// 3. Optional Parameters
function greet(name: string, title?: string): string {
    if (title) {
        return 'Hello, ${name}';
    }
    return 'Hello, ${name}'; 
}
console.log("Greet with title:", greet("Alice", "Dr.")); // Hello, Dr. Alice
console.log("Greet without title:", greet("Bob")); // Hello, Bob

// 4. Default Parameters
function greetWithDefault(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
}
console.log("With custom greeting:", greetWithDefault("Eve", "Welcome")); // Welcome, Eve
console.log("With default greeting:", greetWithDefault("Eve")); // Hello, Eve

/*
OUTPUT:
Add: 5
Multiply: 6
Subtract: 2
Divide: 2
Greet with title: Hello, Alice
Greet without title: Hello, Bob
With custom greeting: Welcome, Eve
With default greeting: Hello, Eve
*/

