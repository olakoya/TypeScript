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
var p = 5;
var q = '5';
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
var myname = "Ola";
var myage = 25;
console.log("Type Operators:");
console.log("Type of myname:", typeof myname); // string
console.log("Type of myage:", typeof myage); // number
var shop = 'Grocery shop ${myage}'; // Grocery shop ${myage}
var shop1 = "Grocery shop' + myage"; // Grocery shop' + myage
var shop2 = "Grocery shop ".concat(myage); // Grocery Shop 25
console.log(shop);
console.log(shop1);
console.log(shop2);
