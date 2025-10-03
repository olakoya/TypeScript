// loops-demo.ts
// Demonstrates different types of loops in TypeScript
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// /*
// OUTPUT
// 1
// 2
// 3
// 4
// 5
// */
// Using loops to print numbers from 1 to unlimited numbers isn't efficient
// In typescript, we have 4 types of loops
// In typescript you have to tell where the loop starts and where it ends. Also for 
// for increment/decrement factor e.g for(1, 5;) isn't valid factor
// For loop
for (var i_1 = 1; i_1 <= 5; i_1++) { // increment by 1
    console.log(i_1);
}
/*
OUTPUT
1
2
3
4
5
*/
//
for (var i_2 = 1; i_2 <= 5; i_2 = i_2 + 2) { // increment by 2
    console.log(i_2);
}
/*
OUTPUT
1
3
5
*/
for (var i_3 = 5; i_3 >= 1; i_3--) { // decrement by 1
    console.log(i_3);
}
/*
OUTPUT
5
4
3
2
1
*/
// Printing from 100 to 1
for (var i_4 = 100; i_4 >= 1; i_4--) { // decrement by 1
    console.log(i_4);
}
/*
OUTPUT
100
99
98
.
.
.
3
2
1
*/
for (var i_5 = 1; i_5 <= 10; i_5++) { // increment by 1
    console.log("2 x ".concat(i_5, " = ").concat(2 * i_5));
}
/*
OUTPUT
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
*/
for (var i_6 = 1; i_6 >= 1; i_6 = i_6 - 1) { // decrement by 1
    if (i_6 % 2 == 0) {
        console.log(i_6);
    }
}
/*
OUTPUT
2
4
6
8
10
*/
// for loop to print even numbers between 1 to 10
for (var i_7 = 1; i_7 <= 10; i_7++) { // increment by 1
    if (i_7 % 2 == 0) {
        console.log(i_7);
    }
}
/*
OUTPUT
2
4
6
8
10
*/
// While loop
// Syntax
// initialization
// while(condition){
//     // code block
//     // increment/decrement
// }
// Print 1 to 10
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
/*
OUTPUT
1
2
3
4
5
6
7
8
9
10
*/
var j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
/*
OUTPUT
10
9
8
7
6
5
4
3
2
1
*/
var h = 10;
while (h >= 1) {
    console.log(j);
    h = h - 2;
}
/*
OUTPUT
10
8
6
4
2
*/
// Print even numbers between 1 to 10
var k = 1;
while (k <= 10) {
    if (k % 2 == 0) {
        console.log(k);
    }
    k++;
}
/*
OUTPUT
2
4
6
8
10
*/
// Print odd numbers between 1 to 10
var m = 1;
while (m <= 10) {
    if (m % 2 != 0) {
        console.log(m);
    }
    m++;
}
/*
OUTPUT
1
3
5
7
9
*/
// do-while loop
// Syntax
// initialization
// do{
//     // code block
//     // increment/decrement
// }while(condition)
// Print 1 to 10
var n = 1;
do {
    console.log(n);
    n++;
} while (n <= 10);
/*
OUTPUT
1
2
3
4
5
6
7
8
9
10
*/
var p = 10;
do {
    console.log(p);
    p--;
} while (p >= 1);
/*
OUTPUT
10
9
8
7
6
5
4
3
2
1
*/
// Print even numbers between 1 to 10
var q = 1;
do {
    if (q % 2 == 0) {
        console.log(q);
    }
    q++;
} while (q <= 10);
/*
OUTPUT
2
4
6
8
10
*/
// Print odd numbers between 1 to 10
var r = 1;
do {
    if (r % 2 != 0) {
        console.log(r);
    }
    r++;
} while (r <= 10);
/*
OUTPUT
1
3
5
7
9
*/
// Arrays
var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// Print all fruits using for loop
for (var i_8 = 0; i_8 < fruits.length; i_8++) {
    console.log(fruits[i_8]);
}
/*
OUTPUT
Apple
Banana
Orange
Mango
*/
// Print all fruits using while loop
var s = 0;
while (s < fruits.length) {
    console.log(fruits[s]);
    s++;
}
/*
OUTPUT
Apple
Banana
Orange
Mango
*/
// Print all fruits using do-while loop
var t = 0;
do {
    console.log(fruits[t]);
    t++;
} while (t < fruits.length);
/*
OUTPUT
Apple
Banana
Orange
Mango
*/
// for...of loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
/*
OUTPUT
Apple
Banana
Orange
Mango
*/
// for...in loop
for (var index in fruits) {
    console.log(fruits[index]); // accessing each element using index
}
/*
OUTPUT
Apple
Banana
Orange
Mango
*/
// for...of loop
// example of for...of loop with array of numbers
var numbers = [10, 20, 30, 40, 50];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    console.log(number); // accessing each element directly
}
/*
OUTPUT
10
20
30
40
50
*/
// for...in loop
// example of for...in loop with array of numbers
for (var index in numbers) {
    console.log(numbers[index]); // accessing each element using index
}
/*
OUTPUT
10
20
30
40
50
*/
// for....of loop - for each loop in java
//example of for...of loop with array of strings
var colors = ['Red', 'Green', 'Blue', 'Yellow'];
for (var _b = 0, colors_1 = colors; _b < colors_1.length; _b++) {
    var color = colors_1[_b];
    console.log(color); // accessing each element directly
}
/*
OUTPUT
Red
Green
Blue
Yellow
*/
// for....in loop - for each loop in java with index
for (var index in colors) {
    console.log(colors[index]); // accessing each element using index
}
/*
OUTPUT
Red
Green
Blue
Yellow
*/
// for loop - traditional for loop in java
for (var i_9 = 0; i_9 < colors.length; i_9++) {
    console.log(colors[i_9]); // accessing each element using index
}
/*
OUTPUT
Red
Green
Blue
Yellow
*/
// while loop - while loop in java
var u = 0;
while (u < colors.length) {
    console.log(colors[u]); // accessing each element using index
    u++;
}
/*
OUTPUT
Red
Green
Blue
Yellow
*/
// do-while loop - do-while loop in java    
var v = 0;
do {
    console.log(colors[v]); // accessing each element using index
    v++;
} while (v < colors.length);
/*
OUTPUT
Red
Green
Blue
Yellow
*/
var marks = [85, 92, 78, 90, 88];
var lengthOfThisArray = marks.length;
console.log(lengthOfThisArray); // 5
var totalMarks = 0;
for (var i_10 = 0; i_10 < marks.length; i_10++) {
    totalMarks += marks[i_10]; // totalMarks = totalMarks + marks[i]
}
console.log("Total Marks: ".concat(totalMarks)); // Total Marks: 433
/*
OUTPUT
5
Total Marks: 433
*/
// Calculate total marks using for loop
var sum = 0;
for (var i_11 = 0; i_11 < marks.length; i_11++) {
    if (marks[i_11] !== undefined) {
        sum += marks[i_11]; // sum = sum + marks[i]
    }
}
console.log("Total Marks using for loop: ".concat(sum)); // Total Marks using for loop: 433
/*
OUTPUT
Total Marks using for loop: 433
*/
for (var i_12 = 1; i_12 <= marks.length - 1; i_12 = i_12 + 1) {
    console.log(marks[i_12]);
}
/*
OUTPUT
92
78
90
88
*/
for (var i_13 = 1; i_13 <= marks.length - 1; i_13 = i_13 + 1) {
    console.log(marks[i_13 - 1]);
}
/*
OUTPUT
85
92
78
90
88
*/
for (var i_14 = 0; i_14 <= marks.length - 1; i_14 = i_14 + 1) {
    console.log(marks[i_14]);
}
/*
OUTPUT
85
92
78
90
88
*/
for (var i_15 = 0; i_15 < marks.length; i_15 = i_15 + 1) {
    console.log(marks[i_15]);
}
/*
OUTPUT
85
92
78
90
88
*/
for (var i_16 = 0; i_16 < marks.length; i_16++) {
    console.log(marks[i_16]);
}
/*
OUTPUT
85
92
78
90
88
*/
for (var i_17 = 0; i_17 < marks.length; i_17 += 1) {
    console.log(marks[i_17]);
}
/*
OUTPUT
85
92
78
90
88
*/
for (var i_18 = 0; i_18 < marks.length; i_18 = i_18 + 2) {
    console.log(marks[i_18]);
}
/*
OUTPUT
85
78
88
*/
for (var i_19 = 1; i_19 < marks.length; i_19 = i_19 + 2) {
    console.log(marks[i_19]);
}
/*
OUTPUT
92
90
*/
for (var i_20 = marks.length - 1; i_20 >= 0; i_20--) {
    console.log(marks[i_20]);
}
/*
OUTPUT
88
90
78
92
85
*/
for (var i_21 = marks.length - 1; i_21 >= 0; i_21 = i_21 - 2) {
    console.log(marks[i_21]);
}
/*
OUTPUT
88
78
85
*/
for (var i_22 = marks.length - 2; i_22 >= 0; i_22 = i_22 - 2) {
    console.log(marks[i_22]);
}
/*
OUTPUT
90
92
*/
// Calculate total marks using while loop
var total = 0;
var w = 0;
while (w < marks.length) {
    if (marks[w] !== undefined) {
        total += marks[w]; // total = total + marks[w]
    }
    w++;
}
console.log("Total Marks using while loop: ".concat(total)); // Total Marks using while loop: 433
/*
OUTPUT
Total Marks using while loop: 433
*/
// Using break statement in loops
for (var i_23 = 1; i_23 <= 10; i_23++) {
    if (i_23 === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i_23);
}
/*
OUTPUT
1
2
3
4
*/
for (var i_24 = 1; i_24 <= 10; i_24++) {
    if (i_24 % 2 === 0) {
        break; // exit the loop when i is even
    }
    console.log(i_24);
}
/*
OUTPUT
1
*/
// Using continue statement in loops
for (var i_25 = 1; i_25 <= 10; i_25++) {
    if (i_25 === 5) {
        continue; // skip the iteration when i is 5
    }
    console.log(i_25);
}
/*
OUTPUT
1
2
3
4
6
7
8
9
10
*/
for (var i_26 = 1; i_26 <= 10; i_26++) {
    if (i_26 % 2 === 0) {
        continue; // skip the iteration when i is even
    }
    console.log(i_26);
}
/*
OUTPUT
1
3
5
7
9
*/
// Nested loops
for (var i_27 = 1; i_27 <= 3; i_27++) { // outer loop
    for (var j_1 = 1; j_1 <= 3; j_1++) { // inner loop
        console.log("i = ".concat(i_27, ", j = ").concat(j_1));
    }
}
/*
OUTPUT
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
*/
// Print multiplication table using nested loops
for (var i_28 = 1; i_28 <= 5; i_28++) { // outer loop for number
    console.log("Multiplication Table of ".concat(i_28, ":"));
    for (var j_2 = 1; j_2 <= 10; j_2++) { // inner loop for multiplier
        console.log("".concat(i_28, " x ").concat(j_2, " = ").concat(i_28 * j_2));
    }
    console.log(''); // print a new line after each table
}
/*
OUTPUT
Multiplication Table of 1:
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10

Multiplication Table of 2:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20

Multiplication Table of 3:
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30

// quit the output here for brevity
*/
// Print pattern using nested loops
for (var i_29 = 1; i_29 <= 5; i_29++) { // outer loop for rows
    var pattern = '';
    for (var j_3 = 1; j_3 <= i_29; j_3++) { // inner loop for columns
        pattern += '* '; // append * to pattern
    }
    console.log(pattern); // print the pattern for each row
}
/*
OUTPUT
*
* *
* * *
* * * *
* * * * *
*/
for (var i_30 = 5; i_30 >= 1; i_30--) { // outer loop for rows
    var pattern = '';
    for (var j_4 = 1; j_4 <= i_30; j_4++) { // inner loop for columns
        pattern += '* '; // append * to pattern
    }
    console.log(pattern); // print the pattern for each row
}
/*
OUTPUT
* * * * *
* * * *
* * *
* *
*
*/
