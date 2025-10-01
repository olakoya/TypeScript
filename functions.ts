// Function-parameters-demo.ts
// Function is used to group a set of statements together to perform a specific task
// It can take inputs, process them, and return an output
// It also used to avoid code repetition and improve code organization
// Functions can be defined using function declaration, function expression, or arrow functions

// Types of functions:
// 1. Named functions
// 2. Anonymous functions
// 3. Arrow functions
// 4. Immediately Invoked Function Expressions (IIFE)
// 5. Recursive functions
// 6. Higher-order functions

// 1. Function Declaration
// function functionName(parameters){
//     // code block
//     return value
// }
function greeting(){
console.log("Hello, Good Morning")
console.log("Hello, Good Afternoon")
console.log("Hello, Good Evening")
console.log("Hello, Good Night")
}
// 2. Function calling
greeting()

/*
OUTPUT
Hello, Good Morning
Hello, Good Afternoon
Hello, Good Evening
Hello, Good Night
*/

// 3. Function with parameters
console.log('Function with parameters') // print a new line for better readability
function add(a:number, b:number){
    console.log("Sum is: ", a+b)
}
add(10, 20) // Sum is: 30
add(5, 15)  // Sum is: 20

/*
OUTPUT
Sum is: 30
Sum is: 20
*/
console.log('--------------------------------------------------') // print a new line for better readability

// 4. Function with multiple parameters
console.log('Function with multiple parameters') // print a new line for better readability
function displayInfo(name:string, age:number, city:string){
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
}
displayInfo("Alice", 30, "New York") // Name: Alice, Age: 30, City: New York
displayInfo("Bob", 25, "Los Angeles") // Name: Bob, Age: 25, City: Los Angeles

/*
OUTPUT
Name: Alice, Age: 30, City: New York
Name: Bob, Age: 25, City: Los Angeles
*/
console.log('--------------------------------------------------') // print a new line for better readability

// 5. Function with nested loops
console.log('Function with nested loops') // print a new line for better readability
/*
Example of nested loops:
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(`i = ${i}, j = ${j}`)
    }
}
*/
function printTable(number:number){
    console.log(`Multiplication Table of ${number}:`)
    for(let i=1; i<=10; i++){
        console.log(`${number} x ${i} = ${number*i}`)
    }
}
printTable(5) // Multiplication Table of 5:
// 5 x 1 = 5
// 5 x 2 = 10   
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25

/*
OUTPUT
Multiplication Table of 5:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/
console.log('--------------------------------------------------') // print a new line for better readability

// 6. Function with return type
console.log('Function with return type') // print a new line for better readability
function multiply(x:number, y:number):number{
    return x * y
}
let result = multiply(5, 4)
console.log("Multiplication is: ", result) // Multiplication is: 20


/*
OUTPUT
Multiplication is: 20
*/
console.log('--------------------------------------------------') // print a new line for better readability

// 7. Function with optional parameters
console.log('Function with optional parameters') // print a new line for better readability
function greet(name:string, message?:string){
    if(message){
        console.log(`${message}, ${name}`)
    } else {
        console.log(`Hello, ${name}`)
    }
}
greet("Alice") // Hello, Alice
greet("Bob", "Good Morning") // Good Morning, Bob


/*
OUTPUT
Hello, Alice
Good Morning, Bob
*/
console.log('--------------------------------------------------') // print a new line for better readability

// 8. Function with default parameters
console.log('Function with default parameters') // print a new line for better readability
function power(base:number, exponent:number = 2):number{
    return Math.pow(base, exponent)
}
console.log("Power is: ", power(3)) // Power is: 9
console.log("Power is: ", power(2, 3)) // Power is: 8

/*
OUTPUT
Power is: 9
Power is: 8
*/
console.log('--------------------------------------------------') // print a new line for better readability

// 9. Function with rest parameters
console.log('Function with rest parameters') // print a new line for better readability
function sum(...numbers:number[]):number{
    let total = 0
    for(let num of numbers){
        total += num
    }
    return total
}
console.log("Sum is: ", sum(1, 2, 3)) // Sum is: 6
console.log("Sum is: ", sum(10, 20, 30, 40)) // Sum is: 100

/*
OUTPUT
Sum is: 6
Sum is: 100
*/
console.log('--------------------------------------------------') // print a new line for better readability

// 10. Anonymous function expression
console.log('Anonymous function expression') // print a new line for better readability
let divide = function(a:number, b:number):number{
    return a / b
}
console.log("Division is: ", divide(20, 4)) // Division is: 5

/*
OUTPUT
Division is: 5
*/
console.log('--------------------------------------------------') // print a new line for better readability

// 11. Arrow function
console.log('Arrow function') // print a new line for better readability
let addArrow = (a:number, b:number):number => a + b
console.log("Addition is: ", addArrow(10, 5)) // Addition is: 15

let subtract = (a:number, b:number):number => a - b
console.log("Subtraction is: ", subtract(10, 5)); // Subtraction is: 5

/*
OUTPUT
Addition is: 15
Subtraction is: 5
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 12. Immediately Invoked Function Expression (IIFE)
console.log('Immediately Invoked Function Expression (IIFE)'); // print a new line for better readability
(function(){
    console.log("This is an IIFE")
})() // This is an IIFE

/*
OUTPUT
This is an IIFE
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 13. Recursive function
console.log('Recursive function'); // print a new line for better readability
function factorial(n:number):number{
    if(n <= 1){
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log("Factorial is: ", factorial(5)) // Factorial is: 120

/*
OUTPUT
Factorial is: 120
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 14. Higher-order function
console.log('Higher-order function'); // print a new line for better readability
function applyOperation(a:number, b:number, operation:(x:number, y:number) => number):number{
    return operation(a, b)
}
let addition = (x:number, y:number):number => x + y
let multiplication = (x:number, y:number):number => x * y
console.log("Addition is: ", applyOperation(5, 10, addition)) // Addition is: 15
console.log("Multiplication is: ", applyOperation(5, 10, multiplication)) // Multiplication is: 50

/*
OUTPUT
Addition is: 15
Multiplication is: 50
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 15. Function Overloading
console.log('Function Overloading'); // print a new line for better readability
function display(value:string):void
function display(value:number):void
function display(value:any):void{
    console.log("Value is: ", value)
}
display("Hello") // Value is: Hello
display(100)     // Value is: 100

/*
OUTPUT
Value is: Hello
Value is: 100
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 16. Function with union types
console.log('Function with union types'); // print a new line for better readability
function printId(id:number | string):void{
    console.log("ID is: ", id)
}
printId(123)       // ID is: 123
printId("ABC123")  // ID is: ABC123

/*
OUTPUT
ID is: 123
ID is: ABC123
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 17. Function with type alias
console.log('Function with type alias'); // print a new line for better readability
type StringOrNumber = string | number
function showValue(value:StringOrNumber):void{
    console.log("Value is: ", value)
}
showValue("Test")  // Value is: Test
showValue(456)     // Value is: 456      

/*
OUTPUT
Value is: Test
Value is: 456
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 18. Nested functions
console.log('Nested functions'); // print a new line for better readability
function outerFunction(msg:string):void{
    function innerFunction():void{
        console.log("Message is: ", msg)
    }
    innerFunction()
}
outerFunction("Hello from nested function") // Message is: Hello from nested function

/*
OUTPUT
Message is: Hello from nested function
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 19. Function with callback
console.log('Function with callback'); // print a new line for better readability
function fetchData(callback:(data:string) => void):void{
    let data = "Sample Data"
    callback(data)
}
fetchData((data:string) => {
    console.log("Fetched Data: ", data)
}) // Fetched Data: Sample Data

/*
OUTPUT
Fetched Data: Sample Data
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 20. Function with async/await
console.log('Function with async/await'); // print a new line for better readability
async function fetchAsyncData():Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async Data")
        }, 1000)
    })
}
async function displayAsyncData():Promise<void>{
    let data = await fetchAsyncData()
    console.log("Data: ", data)
}
displayAsyncData() // Data: Async Data (after 1 second)

/*
OUTPUT
Data: Async Data
*/  
console.log('--------------------------------------------------'); // print a new line for better readability

// 21. Function with generics
console.log('Function with generics'); // print a new line for better readability
function identity<T>(arg:T):T{
    return arg
}
console.log("String Identity: ", identity<string>("Generic String")) // String Identity: Generic String
console.log("Number Identity: ", identity<number>(12345))           // Number Identity: 12345

/*
OUTPUT
String Identity: Generic String
Number Identity: 12345
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 22. Function with tuple types
console.log('Function with tuple types'); // print a new line for better readability
function displayTuple(tuple:[number, string]):void{
    console.log("Tuple values: ", tuple[0], tuple[1])
}
displayTuple([1, "One"]) // Tuple values: 1 One

/*
OUTPUT
Tuple values: 1 One
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 23. Function with intersection types
console.log('Function with intersection types'); // print a new line for better readability
type Person = { name: string }
type Employee = { employeeId: number }
type EmployeeDetails = Person & Employee
function showEmployeeDetails(emp:EmployeeDetails):void{
    console.log("Employee Name: ", emp.name)
    console.log("Employee ID: ", emp.employeeId)
}
showEmployeeDetails({ name: "John", employeeId: 101 }) 

/*
OUTPUT
Employee Name: John
Employee ID: 101
*/
console.log('--------------------------------------------------'); // print a new line for better readability

// 24. Function with void return type
console.log('Function with void return type'); // print a new line for better readability
function logMessage(message:string):void{
    console.log("Log: ", message)
}
logMessage("This is a log message") // Log: This is a log message

/*
OUTPUT
Log: This is a log message
*/
console.log('--------------------------------------------------'); // print a new line for better readability         