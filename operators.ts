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


//-------------------------------
// 2. Comparison Operators
//-------------------------------
let p: any = 5;
let q: any = '5';

console.log("Comparison Operators:");
console.log("p == q:", p == q);
console.log("p === q:", p === q);
console.log("p != q:", p != q);
console.log("p !== q:", p !== q);
console.log("p > q:", p > q);
console.log("p < q:", p < q);
console.log("p >= q:", p >= q);
console.log("p <= q:", p <= q);

console.log("-------------------------------");


//-------------------------------
// 3. Logical Operators
//-------------------------------


//-------------------------------
// 4. Assignment Operators
//-------------------------------


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


