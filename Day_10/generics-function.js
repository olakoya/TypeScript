// Generic Functions
// Generics provide a way to make components work with any data type and not restrict to one data type
// This allows users to consume these components with their own data types
// Generic Function Syntax
// function functionName<T>(arg: T): T {
//     return arg;
// }
// Example 1: A simple generic function that returns the argument passed to it
function identity(arg) {
    return arg;
}
console.log(identity("Hello")); // Output: Hello
console.log(identity(42)); // Output: 42
console.log("-------------------------------------");
// Example 2: A generic function with multiple type parameters
function pair(first, second) {
    return [first, second];
}
console.log(pair("Age", 30)); // Output: ["Age", 30]
console.log(pair(true, "Yes")); // Output: [true, "Yes"]
console.log("-------------------------------------");
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
console.log(loggingIdentity("Hello")); // Output: 5
console.log(loggingIdentity([1, 2, 3])); // Output: 3
// console.log(loggingIdentity(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
console.log("-------------------------------------");
// Example 4: Using generic functions with arrays
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // Output: 1
console.log(getFirstElement(["a", "b", "c"])); // Output: "a"
console.log("-------------------------------------");
// Example 5: Generic function with default type
function createArray(length, value) {
    return Array.from({ length: length }, function () { return value; });
}
console.log(createArray(3, "x")); // Output: ["x", "x", "x"]
console.log(createArray(3, 42)); // Output: [42, 42, 42]
console.log("-------------------------------------");
function describePerson(person) {
    return "".concat(person.name, " is ").concat(person.age, " years old.");
}
var person = { name: "Alice", age: 30 };
console.log(describePerson(person)); // Output: Alice is 30 years old.
console.log("-------------------------------------");
function getValue2(key) {
    if (typeof key === "string") {
        return "true";
    }
    else if (typeof key === "boolean") {
        return true;
    }
}
console.log(getValue2("Yash"));
console.log(getValue2(false));
function getValue(key, value1, value2) {
    if (typeof key === "string") {
        return value1;
    }
    else {
        return value2;
    }
}
console.log(getValue("Yash", 30, 22));
console.log(getValue(true, 30, 22));
