// conditional-statements_demo.ts
// Demonstrates the use of conditional statements in TypeScript
//------------------------------
// 1. if Statement
//-------------------------------
var myAge2 = 18;
console.log("1. if Statement:");
if (myAge2 >= 18) {
    console.log("You are an adult and eligible to vote."); // This block runs if the condition statement is true
}
console.log("-------------------------------\n");
/*
OUTPUT
1. if Statement:
You are an adult and eligible to vote.
-------------------------------

//------------------------------
// 2. if...else Statement
//-------------------------------
let isRaining: boolean = false;

console.log("2. if...else Statement:");
if (isRaining) {
    console.log("It's raining. Take an umbrella!");
} else {
    console.log("It's not raining. No need for an umbrella. Wear sunglasses!");
}
console.log("-------------------------------\n");

/*
OUTPUT
i2. if...else Statement:
It's not raining. No need for an umbrella. Wear sunglasses!
-------------------------------
*/
//-------------------------------
// 3. else if...else Statement
//-------------------------------
var marks = 85;
console.log("3. else if...else Statement:");
if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 75) {
    console.log("Grade: B");
}
else if (marks >= 60) {
    console.log("Grade: C");
}
else if (marks >= 50) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
console.log("-------------------------------\n");
/*
OUTPUT
3. else if...else Statement:
Grade: B
-------------------------------
*/
//-------------------------------
// 4. switch Statement
//-------------------------------
var day1 = 3; // 1=Monday, 2=Tuesday, ..., 7=Sunday
console.log("4a. switch Statement:");
switch (day1) {
    case 1:
        console.log("It's Monday.");
        break;
    case 2:
        console.log("It's Tuesday.");
        break;
    case 3:
        console.log("It's Wednesday.");
        break;
}
console.log("-------------------------------\n");
/*
OUTPUT
4a. switch Statement:
It's Wednesday.
-------------------------------
*/
var day2 = "Thursday"; // "Monday", "Tuesday", ..., "Sunday"
console.log("4b. switch Statement:");
switch (day2) {
    case "Monday":
        console.log("It's Monday.");
        break;
    case "Tuesday":
        console.log("It's Tuesday.");
        break;
    case "Wednesday":
        console.log("It's Wednesday.");
        break;
    case "Thursday":
        console.log("It's Thursday.");
        break;
    case "Friday":
        console.log("It's Friday.");
        break;
    case "Saturday":
        console.log("It's Saturday.");
        break;
    case "Sunday":
        console.log("It's Sunday.");
        break;
    default:
        console.log("Invalid day.");
}
console.log("-------------------------------\n");
/*
OUTPUT
4b. switch Statement:
It's Thursday.
-------------------------------
*/
var day3 = "Wednesday"; // "Monday", "Tuesday", ..., "Sunday"
console.log("4c. switch Statement:");
switch (day3) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Tuesday":
        console.log("Second day of the week.");
        break;
    case "Wednesday":
        console.log("Midweek break!");
        break;
    case "Thursday":
        console.log("Fourth day of the week.");
        break;
    case "Friday":
        console.log("Almost the weekend!");
        break;
    default:
        console.log("Just another day.");
}
console.log("-------------------------------\n");
/*
OUTPUT
4c. switch Statement:
Midweek break!
-------------------------------
*/
//-------------------------------
// 5. Ternary Operator (Short-hand for if...else)
//-------------------------------
var isLoggedIn = true;
var message1;
if (isLoggedIn) {
    message1 = "Welcome back, user!";
}
else {
    message1 = "Please log in to continue.";
}
console.log("mesaage1} // Traditional if...else statementt:");
console.log("5. Ternary Operator:");
var message = isLoggedIn ? "Welcome back, user!" : "Please log in to continue."; // Ternary operator
console.log(message); // Ternary operator result
console.log("-------------------------------\n");
/*
OUTPUT
5. Ternary Operator:
Welcome back, user!
------------------------------
*/
