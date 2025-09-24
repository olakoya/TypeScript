/**
 * There are 5 types of operators in TypeScript:
 * 1. Arithmetic Operators
 * 2. Comparison Operators
 * 3. Logical Operators
 * 4. Assignment Operators
 * 5. Type Operators
 */


//-------------------------------
// 1. Arithmetic Operators
//-------------------------------
let a: number = 10;
let b: number = 5;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition: 15
console.log("a - b =", a - b); // Subtraction: 5
console.log("a * b =", a * b); // Multiplication: 50
console.log("a / b =", a / b); // Division: 2
console.log("a % b =", a % b); // Modulus or Remainder: 0
console.log("a ** b =", a ** b); // Exponentiation: 100000

a++; // a = a + 1 // Increment
console.log("After a++, a =", a); // 11

b--; // b = b - 1 // Decrement
console.log("After b--, b =", b); // 4

console.log("-------------------------------");

/*
OUTPUT
Arithmetic Operators:
a + b = 15
a - b = 5
a * b = 50
a / b = 2
a % b = 0
a ** b = 100000
After a++, a = 11
After b--, b = 4
-------------------------------
*/

//-------------------------------
// 2. Comparison Operators
//-------------------------------
let p: any = 5;
let q: any = '5';

console.log("Comparison Operators:");
console.log("p == q:", p == q); // true (value equality)
console.log("p === q:", p === q); // false (strict or value and type equality)
console.log("p != q:", p != q); // false (not equal or value inequality or loose inequality)
console.log("p !== q:", p !== q); // true (not equal or value and type inequality or strict inequality)
console.log("p > q:", p > q); // false
console.log("p < q:", p < q); // false
console.log("p >= q:", p >= q); // true
console.log("p <= q:", p <= q); // true

console.log("-------------------------------");

/*
OUTPUT
Comparison Operators:
p == q: true
p === q: false
p != q: false
p !== q: true
p > q: false
p < q: false
p >= q: true
p <= q: true
-------------------------------
*/


//-------------------------------
// 3. Logical Operators
//-------------------------------
let isStudent: boolean = true;
let isEmployed: boolean = false;
let hasID: boolean = true;

console.log("Logical Operators:");
console.log("isStudent && hasID:", isStudent && hasID); // true
console.log("isStudent && isEmployed:", isStudent && isEmployed); // false
console.log("isStudent || isEmployed:", isStudent || isEmployed); // true
console.log("isEmployed || hasID:", isEmployed || hasID); // true
console.log("!isStudent:", !isStudent); // false
console.log("!isEmployed:", !isEmployed); // true

console.log("-------------------------------");

/*
OUTPUT
Logical Operators:
isStudent && hasID: true
isStudent && isEmployed: false
isStudent || isEmployed: true
isEmployed || hasID: true
!isStudent: false
!isEmployed: true
-------------------------------
*/

//-------------------------------
// 4. Assignment Operators
//-------------------------------
let x: number = 10;

console.log("Assignment Operators:");
x += 5; // x = x + 5
console.log("After x += 5, x =", x); // 15

x -= 3; // x = x - 3;
console.log("After x -= 3, x =", x); // 12

x *= 2; // x = x * 2
console.log("After x *= 2, x =", x); // 24

x /= 4; // x = x / 4
console.log("After x /= 4, x =", x); // 6

x %= 4; // x = x % 4
console.log("After x %= 4, x =", x); // 2

x **= 3; // x = x ** 3
console.log("After x **= 3, x =", x); // 8

console.log("-------------------------------");

/*
OUTPUT
Assignment Operators:

Initial value
let x = 10;

x += 5
→ x = 10 + 5 → x = 15

x -= 3
→ x = 15 - 3 → x = 12

*x = 2
→ x = 12 * 2 → x = 24

x /= 4
→ x = 24 / 4 → x = 6

x %= 4
→ x = 6 % 4 → remainder when 6 ÷ 4 = 2

**x = 3
→ x = 2 ** 3 → 2 to the power of 3 = 8
-------------------------------
After x += 5, x = 15
After x -= 3, x = 12
After x *= 2, x = 24
After x /= 4, x = 6
After x %= 4, x = 2
After x **= 3, x = 8
-------------------------------
*/

//-------------------------------
// 5. Type Operators
//-------------------------------
let myname = "Ola";
let myage = 25;

console.log("Type Operators:");
console.log("Type of myname:", typeof myname); // string
console.log("Type of myage:", typeof myage); // number

let shop = 'Grocery shop ${myage}' // Grocery shop ${myage}
let shop1 = `Grocery shop' + myage` // Grocery shop' + myage
let shop2 = `Grocery shop ${myage}` // Grocery Shop 25

console.log(shop);
console.log(shop1);
console.log(shop2);
console.log("-------------------------------");

/*
OUTPUT
Type Operators:
Type of myname: string
Type of myage: number
Grocery shop ${myage}
Grocery shop' + myage
Grocery Shop 25
-------------------------------
*/


