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
for(let i=1; i<=5; i++){ // increment by 1
    console.log(i)
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

for(let i=1; i<=5; i = i + 2){ // increment by 2
    console.log(i)
}
/*
OUTPUT
1
3
5
*/

for(let i=5; i>=1; i--){ // decrement by 1
    console.log(i)
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
for(let i=100; i>=1; i--){ // decrement by 1
    console.log(i)
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

for(let i=1; i<=10; i++){ // increment by 1
    console.log(`2 x ${i} = ${2*i}`)
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

for(let i=1; i>=1; i = i - 1){ // decrement by 1
    if(i%2 == 0){
        console.log(i)
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

for(let i=1; i<=10; i++){ // increment by 1
    if(i%2 == 0){
        console.log(i)
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

let i = 1
while(i<=10){
    console.log(i)
    i++
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

let j = 10
while(j>=1){
    console.log(j)
    j--
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

let h = 10
while(h>=1){
    console.log(j)
    h = h - 2
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
let k = 1
while(k<=10){
    if(k%2 == 0){
        console.log(k)
    }
    k++
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
let m = 1
while(m<=10){
    if(m%2 != 0){
        console.log(m)
    }
    m++
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

let n = 1
do{
    console.log(n)
    n++
}while(n<=10)

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

let p = 10
do{
    console.log(p)
    p--
}while(p>=1)

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

let q = 1
do{
    if(q%2 == 0){
        console.log(q)
    }
    q++
}while(q<=10)

/*
OUTPUT
2
4
6
8
10
*/

// Print odd numbers between 1 to 10

let r = 1
do{
    if(r%2 != 0){
        console.log(r)
    }
    r++
}while(r<=10)

/*
OUTPUT
1
3
5
7
9
*/

// Arrays
let fruits = ['Apple', 'Banana', 'Orange', 'Mango']

// Print all fruits using for loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

/*
OUTPUT
Apple
Banana
Orange
Mango
*/

// Print all fruits using while loop
let s = 0
while(s<fruits.length){
    console.log(fruits[s])
    s++
}

/*
OUTPUT
Apple
Banana
Orange
Mango
*/

// Print all fruits using do-while loop
let t = 0
do{
    console.log(fruits[t])
    t++
}while(t<fruits.length)

/*
OUTPUT
Apple
Banana
Orange
Mango
*/

// for...of loop
for(let fruit of fruits){
    console.log(fruit)
}

/*
OUTPUT
Apple
Banana
Orange
Mango
*/

// for...in loop
for(let index in fruits){
    console.log(fruits[index]) // accessing each element using index
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
let numbers = [10, 20, 30, 40, 50]
for(let number of numbers){
    console.log(number) // accessing each element directly
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
for(let index in numbers){
    console.log(numbers[index]) // accessing each element using index
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
let colors = ['Red', 'Green', 'Blue', 'Yellow']
for(let color of colors){
    console.log(color) // accessing each element directly
}
/*
OUTPUT
Red
Green
Blue
Yellow
*/


// for....in loop - for each loop in java with index
for(let index in colors){
    console.log(colors[index]) // accessing each element using index
}
/*
OUTPUT
Red
Green
Blue
Yellow
*/      


// for loop - traditional for loop in java
for(let i=0; i<colors.length; i++){
    console.log(colors[i]) // accessing each element using index
}
/*
OUTPUT
Red
Green
Blue
Yellow
*/  


// while loop - while loop in java
let u = 0
while(u<colors.length){
    console.log(colors[u]) // accessing each element using index
    u++
}
/*
OUTPUT
Red
Green
Blue
Yellow
*/

// do-while loop - do-while loop in java    
let v = 0
do{
    console.log(colors[v]) // accessing each element using index
    v++
}while(v<colors.length)
/*
OUTPUT
Red
Green
Blue
Yellow
*/

let marks = [85, 92, 78, 90, 88]
let lengthOfThisArray: number = marks.length
console.log(lengthOfThisArray) // 5
let totalMarks: number = 0

for(let i=0; i<marks.length; i++){
    totalMarks += marks[i]! // totalMarks = totalMarks + marks[i]
}

console.log(`Total Marks: ${totalMarks}`) // Total Marks: 433

/*
OUTPUT
5
Total Marks: 433
*/


// Calculate total marks using for loop
let sum = 0
for (let i = 0; i < marks.length; i++) {
    if (marks[i] !== undefined) {
        sum += marks[i]! // sum = sum + marks[i]
    }
}
console.log(`Total Marks using for loop: ${sum}`) // Total Marks using for loop: 433

/*
OUTPUT
Total Marks using for loop: 433
*/

for (let i = 1; i <= marks.length - 1; i = i + 1) {
    console.log(marks[i])
}

/*
OUTPUT
92
78
90
88
*/  


for (let i = 1; i <= marks.length - 1; i = i + 1) {
    console.log(marks[i-1])
}

/*
OUTPUT
85
92
78
90
88
*/

for (let i = 0; i <= marks.length - 1; i = i + 1) {
    console.log(marks[i])
}

/*
OUTPUT
85
92
78
90
88
*/

for (let i = 0; i < marks.length; i = i + 1) {
    console.log(marks[i])
}

/*
OUTPUT
85
92
78
90
88
*/

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}

/*
OUTPUT
85
92
78
90
88
*/

for (let i = 0; i < marks.length; i += 1) {
    console.log(marks[i])
}

/*
OUTPUT
85
92
78
90
88
*/

for (let i = 0; i < marks.length; i = i + 2) {
    console.log(marks[i])
}

/*
OUTPUT
85
78
88
*/

for (let i = 1; i < marks.length; i = i + 2) {
    console.log(marks[i])
}

/*
OUTPUT
92
90
*/

for (let i = marks.length - 1; i >= 0; i--) {
    console.log(marks[i])
}

/*
OUTPUT
88
90
78
92
85
*/

for (let i = marks.length - 1; i >= 0; i = i - 2) {
    console.log(marks[i])
}

/*
OUTPUT
88
78
85
*/

for (let i = marks.length - 2; i >= 0; i = i - 2) {
    console.log(marks[i])
}

/*
OUTPUT
90
92
*/

// Calculate total marks using while loop
let total = 0
let w = 0
while(w<marks.length){
    if(marks[w] !== undefined){
        total += marks[w]! // total = total + marks[w]
    }
    w++
}
console.log(`Total Marks using while loop: ${total}`) // Total Marks using while loop: 433

/*
OUTPUT
Total Marks using while loop: 433
*/

// Using break statement in loops
for(let i=1; i<=10; i++){
    if(i === 5){
        break // exit the loop when i is 5
    }
    console.log(i)
}

/*
OUTPUT
1
2
3
4
*/

for(let i=1; i<=10; i++){
    if(i % 2 === 0){
        break // exit the loop when i is even
    }
    console.log(i)
}

/*
OUTPUT
1
*/

// Using continue statement in loops
for(let i=1; i<=10; i++){
    if(i === 5){
        continue // skip the iteration when i is 5
    }
    console.log(i)
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

for(let i=1; i<=10; i++){
    if(i % 2 === 0){
        continue // skip the iteration when i is even
    }
    console.log(i)
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
for(let i=1; i<=3; i++){ // outer loop
    for(let j=1; j<=3; j++){ // inner loop
        console.log(`i = ${i}, j = ${j}`)
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
for(let i=1; i<=5; i++){ // outer loop for number
    console.log(`Multiplication Table of ${i}:`)
    for(let j=1; j<=10; j++){ // inner loop for multiplier
        console.log(`${i} x ${j} = ${i*j}`)
    }
    console.log('') // print a new line after each table
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
for(let i=1; i<=5; i++){ // outer loop for rows
    let pattern = ''
    for(let j=1; j<=i; j++){ // inner loop for columns
        pattern += '* ' // append * to pattern
    }
    console.log(pattern) // print the pattern for each row
}

/*
OUTPUT
* 
* * 
* * * 
* * * * 
* * * * * 
*/

for(let i=5; i>=1; i--){ // outer loop for rows
    let pattern = ''
    for(let j=1; j<=i; j++){ // inner loop for columns
        pattern += '* ' // append * to pattern
    }
    console.log(pattern) // print the pattern for each row
}

/*
OUTPUT
* * * * * 
* * * * 
* * * 
* * 
* 
*/
