// Array-functions-demo.ts

let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

let number1: number[] = [10, 20, 30, 40, 50];
// number1.length ==> 5
number1[number1.length] = 60; // Adding element at the end
console.log("After adding 60:", number1); // [10, 20, 30, 40, 50, 60]

/*
OUTPUT:
Original array: [ 1, 2, 3, 4, 5 ]
After adding 60: [ 10, 20, 30, 40, 50, 60 ]
*/
console.log('--------------------------------------')

// Commonly used array functions in TypeScript/JavaScript:

// 1. push() - Adds one or more elements to the end of an array
numbers.push(6);
console.log("After push(6):", numbers); // [1, 2, 3, 4, 5, 6]

/*
OUTPUT:
Original array: [ 1, 2, 3, 4, 5 ]
After push(6): [ 1, 2, 3, 4, 5, 6 ]
*/
console.log('--------------------------------------')

// 2. pop() - Removes the last element from an array
numbers.pop();
console.log("After pop():", numbers); // [1, 2, 3, 4, 5]

/*
OUTPUT:
After pop(): [ 1, 2, 3, 4, 5 ]
*/
console.log('--------------------------------------')

// 3. unshift() - Adds one or more elements to the beginning of an array
numbers.unshift(0);
console.log("After unshift(0):", numbers); // [0, 1, 2, 3, 4, 5]

/*
OUTPUT:
After unshift(0): [ 0, 1, 2, 3, 4, 5 ]
*/
console.log('--------------------------------------')

// 4. shift() - Removes the first element from an array
numbers.shift();
console.log("After shift():", numbers); // [1, 2, 3, 4, 5]

/*
OUTPUT:
After shift(): [ 1, 2, 3, 4, 5 ]
*/
console.log('--------------------------------------')

// 5. splice() - Adds/Removes elements from an array
numbers.splice(2, 1, 99); // At index 2, remove 1 element and add 99
console.log("After splice(2, 1, 99):", numbers); // [1, 2, 99, 4, 5]

/*
OUTPUT:
After splice(2, 1, 99): [ 1, 2, 99, 4, 5 ]
*/
console.log('--------------------------------------')

// 6. slice() - Returns a shallow copy of a portion of an array
let sliced = numbers.slice(1, 4); // From index 1 to index 4 (not inclusive)
console.log("Sliced array (1,4):", sliced); // [2, 99, 4]

/*
OUTPUT:
Sliced array (1,4): [ 2, 99, 4 ]
*/
console.log('--------------------------------------')

// 7. forEach() - Executes a provided function once for each array element
console.log("Using forEach to print elements:");
numbers.forEach(num => console.log(num));

/*
OUTPUT:
Using forEach to print elements:
1
2
99
4
5
*/
console.log('--------------------------------------')

// 8. map() - Creates a new array with the results of calling a provided function on every element
let doubled = numbers.map(num => num * 2);
console.log("Doubled array using map():", doubled); // [2, 4, 198, 8, 10]

/*
OUTPUT:
Doubled array using map(): [ 2, 4, 198, 8, 10 ]
*/
console.log('--------------------------------------')

// 9. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let filtered = numbers.filter(num => num > 3);
console.log("Filtered array (num > 3) using filter():", filtered); // [99, 4, 5]


/*
OUTPUT:
Filtered array (num > 3) using filter(): [ 99, 4, 5 ]
*/
console.log('--------------------------------------')

// 10. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array elements using reduce():", sum); // 111

/*
OUTPUT:
Sum of array elements using reduce(): 111
*/
console.log('--------------------------------------')

// 11. Includes() - Determines whether an array includes a certain value among its entries or Check if an element exists in an array
console.log("Incleudes 99:", numbers.includes(99)); // true
console.log("Includes 100:", numbers.includes(100)); // false

/*
OUTPUT:
Incleudes 99: true
Includes 100: false
*/
console.log('--------------------------------------')

// 12. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log("Index of 99:", numbers.indexOf(99)); // 2
console.log("Index of 100:", numbers.indexOf(100)); // -1

/*
OUTPUT:
Index of 99: 2
Index of 100: -1
*/
console.log('--------------------------------------')

// 13. find() - Returns the value of the first element in the array that satisfies the provided testing function
let found = numbers.find(num => num > 3);
console.log("First number greater than 3 using find():", found); // 99

/*
OUTPUT:
First number greater than 3 using find(): 99
*/
console.log('--------------------------------------')

// 14. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = numbers.findIndex(num => num > 3);
console.log("Index of first number greater than 3 using findIndex():", foundIndex); // 2

/*
OUTPUT:
Index of first number greater than 3 using findIndex(): 2
*/
console.log('--------------------------------------')

// 15. sort() - Sorts the elements of an array in place and returns the sorted array
numbers.sort((a, b) => a - b); // Ascending order
console.log("Sorted array using sort():", numbers); // [1, 2, 4, 5, 99]

/*
OUTPUT:
Sorted array using sort(): [ 1, 2, 4, 5, 99 ]
*/
console.log('--------------------------------------')

// 16. reverse() - Reverses the order of the elements in an array in place
numbers.reverse();
console.log("Reversed array using reverse():", numbers); // [99, 5, 4, 2, 1]

/*
OUTPUT:
Reversed array using reverse(): [ 99, 5, 4, 2, 1 ]
*/
console.log('--------------------------------------')

// 17. map() - Transforms each element of the array based on the provided function
let incremented = numbers.map(num => num + 1);
console.log("Incremented array using map():", incremented); // [100, 6, 5, 3, 2]

let doubledDuplicate: number[] = []
for (let i = 0; i < numbers.length; i++) {
    doubledDuplicate.push(numbers[i] * 2);
}
console.log("Doubled array using for loop:", doubledDuplicate); // [198, 10, 8, 4, 2]

let doubled1 = numbers.map(num => num * 2);
console.log("Doubled array using map():", doubled1); // [198, 10, 8, 4, 2]

/*
OUTPUT:
Incremented array using map(): [ 100, 6, 5, 3, 2 ]
Doubled array using for loop: [ 198, 10, 8, 4, 2 ]
Doubled array using map(): [ 198, 10, 8, 4, 2 ]
*/

