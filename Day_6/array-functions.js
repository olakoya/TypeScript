// Array-functions-demo.ts
var numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);
var number1 = [10, 20, 30, 40, 50];
// number1.length ==> 5
number1[number1.length] = 60; // Adding element at the end
console.log("After adding 60:", number1); // [10, 20, 30, 40, 50, 60]
/*
OUTPUT:
Original array: [ 1, 2, 3, 4, 5 ]
After adding 60: [ 10, 20, 30, 40, 50, 60 ]
*/
// Commonly used array functions in TypeScript/JavaScript:
// 1. push() - Adds one or more elements to the end of an array
numbers.push(6);
console.log("After push(6):", numbers); // [1, 2, 3, 4, 5, 6]
/*
OUTPUT:
Original array: [ 1, 2, 3, 4, 5 ]
After push(6): [ 1, 2, 3, 4, 5, 6 ]
*/
// 2. pop() - Removes the last element from an array
numbers.pop();
console.log("After pop():", numbers); // [1, 2, 3, 4, 5]
/*
OUTPUT:
After pop(): [ 1, 2, 3, 4, 5 ]
*/
// 3. unshift() - Adds one or more elements to the beginning of an array
numbers.unshift(0);
console.log("After unshift(0):", numbers); // [0, 1, 2, 3, 4, 5]
/*
OUTPUT:
After unshift(0): [ 0, 1, 2, 3, 4, 5 ]
*/
// 4. shift() - Removes the first element from an array
numbers.shift();
console.log("After shift():", numbers); // [1, 2, 3, 4, 5]
/*
OUTPUT:
After shift(): [ 1, 2, 3, 4, 5 ]
*/
// 5. splice() - Adds/Removes elements from an array
numbers.splice(2, 1, 99); // At index 2, remove 1 element and add 99
console.log("After splice(2, 1, 99):", numbers); // [1, 2, 99, 4, 5]
/*
OUTPUT:
After splice(2, 1, 99): [ 1, 2, 99, 4, 5 ]
*/
// 6. slice() - Returns a shallow copy of a portion of an array
var sliced = numbers.slice(1, 4); // From index 1 to index 4 (not inclusive)
console.log("Sliced array (1,4):", sliced); // [2, 99, 4]
/*
OUTPUT:
Sliced array (1,4): [ 2, 99, 4 ]
*/
// 7. forEach() - Executes a provided function once for each array element
console.log("Using forEach to print elements:");
numbers.forEach(function (num) { return console.log(num); });
/*
OUTPUT:
Using forEach to print elements:
1
2
99
4
5
*/
// 8. map() - Creates a new array with the results of calling a provided function on every element
var doubled = numbers.map(function (num) { return num * 2; });
console.log("Doubled array using map():", doubled); // [2, 4, 198, 8, 10]
/*
OUTPUT:
Doubled array using map(): [ 2, 4, 198, 8, 10 ]
*/
// 9. filter() - Creates a new array with all elements that pass the test implemented by the provided function
var filtered = numbers.filter(function (num) { return num > 3; });
console.log("Filtered array (num > 3) using filter():", filtered); // [99, 4, 5]
/*
OUTPUT:
Filtered array (num > 3) using filter(): [ 99, 4, 5 ]
*/
// 10. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log("Sum of array elements using reduce():", sum); // 111
/*
OUTPUT:
Sum of array elements using reduce(): 111
*/ 
