// What is Data?
// Anything that is used to complete the task and go forward is called dat

// What is Variable?
// The containers that are used to store the data are called variables.

// What is a Data Type?
// E.g.: Chilli Powder, Coariander Powder - Spices
// E.g.: Sugar, Honey, Jaggery - sweetners
// E.g.: Channa Dal, Toor Dal - Dals

/*

1. Number
2. String
3. Boolean - true/false
4. Null - The developer intentionally saying this doesn't hold any value or anything
5. Undefined - Is soemthing which doesn't have any value or any type of data yet
6. Object
7. Unknown - It can hold any type of data, we don't know what it can actually hold - 
this is a multipurpose container

*/

// Number

// Declare and Initialize
let age: number
age = 25
console.log(age)

// Declare and Initialize (Decimals also)
let myAge: number = 25.12
let marksInMaths: number = 80
console.log(myAge)
console.log(marksInMaths)

// String
let myName: string = "Ola"
console.log(myName)

// Boolean
let isMale: boolean = true
let isFemale: boolean = false
console.log(isMale)
console.log(isFemale)

// Null
let gender: null = null
console.log(gender)


// Undefined
let race
race = "Ola"
console.log(race)


// Unknown
let container: unknown = 20
container = "Ola"
console.log(container)

// Object
let personalDetails: object = {
    myName: "Ola",
    myAge: 25,
    myAddress: 'London, UK'
}

//Uniion Operator with Multiple Data Types
let myMarks: number | string | boolean = 'Ola' // Union Type Operator

console.log(personalDetails)