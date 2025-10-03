// Different ways to print data to the console in JavaScript
// 1. Using console.log()
console.log("This is a standard log message.");
console.log("Hello, World!");
console.log("Hello, World!", 42);
console.log("Hello, World!", { key: "value" });
console.log("Hello, World!", [1, 2, 3]);
console.log("Hello, World!", true);
console.log("Hello, World!", 42, 'Ola');
console.log("Hello, World!", 40 + 50);
// 2. Using console.info()
console.info("This is an informational message.");
// 3. Using console.warn()
console.warn("This is a warning message.");
// 4. Using console.error()
console.error("This is an error message.");
// 5. Using console.table() to display tabular data
var users = [];
users.push({ name: "Alice", age: 30 });
users.push({ name: "Bob", age: 25 });
console.table(users);
// 6. Using console.debug() for debugging messages
console.debug("This is a debug message.");
// 7. Using console.trace() to print a stack trace
function firstFunction() {
    2;
    secondFunction();
}
secondFunction();
function secondFunction() { 1; }
firstFunction();
