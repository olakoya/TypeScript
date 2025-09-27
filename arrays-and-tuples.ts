// // Array
// let fruits: string[] = ['Apple', 'Banana', 'Mango'];

// Array can also be defined using generic array type and can't tell which type of array it is.

// console.log('Fruits:', fruits);
// console.log('First fruit:', fruits[0]);
// console.log('Third fruit:', fruits[2]);

// /*
// OUTPUT:
// Fruits: [ 'Apple', 'Banana', 'Mango' ]
// First fruit: Apple
// */

// let subjects: string[] = [];
// subjects[0] = 'Social Studies';
// subjects[1] = 'Science';
// subjects[2] = 'Mathematics';

// console.log(subjects)
// console.log(subjects[0]);
// console.log(subjects[2]);
// console.log(subjects[3]); // undefined

// /*
// OUTPUT:
// [ 'Social Studies', 'Science', 'Mathematics' ]
// Social Studies
// Mathematics
// undefined
// */

// let marks: number[] = [85, 90, 78, 92];
// console.log(marks);

// let anyArray = ["ABCD", 1, 2, true];
// console.log(anyArray);

// /*
// OUTPUT:
// [ 85, 90, 78, 92 ]
// [ 'ABCD', 1, 2, true ]
// */

// // Tuple
let person: [string, number, boolean] = ['John', 25, true];
console.log('Tuple:', person);
console.log('Name:', person[0]);
console.log('Age:', person[1]);
console.log('Is Employed:', person[2]);

let coordinates: [number, number] = [125.01994, 75.12345];
console.log('The Latitude is:', coordinates[0]);
console.log('The Longitude is:', coordinates[1]);

/*
Coordinates is a tuple of two numbers representing latitude and longitude.
Tuple can tell which type of data it is and how many elements it contains.
The concepts of accessing elements are same as arrays.
OUTPUT:
Tuple: [ 'John', 25, true ]
Name: John
Age: 25
Is Employed: true
The Latitude is: 125.01994
The Longitude is: 75.12345
*/