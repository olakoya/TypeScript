// conditional-statements_demo.ts
// Demonstrates the use of conditional statements in TypeScript

//------------------------------
// 1. if Statement
//-------------------------------
let myAge2: number = 17;

console.log("1. if Statement:");

if (myAge2 >= 18) {
    console.log("You are an adult and eligible to vote.");
}
console.log("-------------------------------\n");

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
if Statement:
_-------------------------------
if...else Statement:
It's not raining. No need for an umbrella. Wear sunglasses!
-------------------------------
*/

//-------------------------------
// 3. else if...else Statement
//-------------------------------
let marks: number = 85;
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
let day: number = 3; // 1=Monday, 2=Tuesday, ..., 7=Sunday

console.log("4. switch Statement:");
switch (day) {
    case 1:
        console.log("It's Monday.");
        break;
}
console.log("-------------------------------\n");

/*
OUTPUT
4. switch Statement:
It's Monday.
-------------------------------
*/

let day2: string = "Tuesday"; // "Monday", "Tuesday", ..., "Sunday"

console.log("4. switch Statement:");
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
4. switch Statement:
It's Tuesday.
-------------------------------
*/
