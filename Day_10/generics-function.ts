// Generic Functions
// Generics provide a way to make components work with any data type and not restrict to one data type
// This allows users to consume these components with their own data types

// Generic Function Syntax
// function functionName<T>(arg: T): T {
//     return arg;
// }

// Example 1: A simple generic function that returns the argument passed to it
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42)); // Output: 42
console.log("-------------------------------------")

// Example 2: A generic function with multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log(pair<string, number>("Age", 30)); // Output: ["Age", 30]
console.log(pair<boolean, string>(true, "Yes")); // Output: [true, "Yes"]
console.log("-------------------------------------")

// Example 3: A generic function with constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

console.log(loggingIdentity("Hello")); // Output: 5
console.log(loggingIdentity([1, 2, 3])); // Output: 3
// console.log(loggingIdentity(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
console.log("-------------------------------------")


// Example 4: Using generic functions with arrays
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3])); // Output: 1
console.log(getFirstElement<string>(["a", "b", "c"])); // Output: "a"
console.log("-------------------------------------")

// Example 5: Generic function with default type
function createArray<T = string>(length: number, value: T): T[] {
    return Array.from({ length }, () => value);
}

console.log(createArray(3, "x")); // Output: ["x", "x", "x"]
console.log(createArray<number>(3, 42)); // Output: [42, 42, 42]
console.log("-------------------------------------")

// Example 6: Generic function with multiple constraints
interface Nameable {
    name: string;
}

interface Ageable {
    age: number;
}

function describePerson<T extends Nameable & Ageable>(person: T): string {
    return `${person.name} is ${person.age} years old.`;
}

const person = { name: "Alice", age: 30 };
console.log(describePerson(person)); // Output: Alice is 30 years old.
console.log("-------------------------------------")

function getValue2<K> (key: K): any {
    if(typeof key === "string") {
        return "true"
    } else if (typeof key === "boolean") {
        return true
    }
}

console.log(getValue2<string>("Yash"))
console.log(getValue2<boolean>(false))





function getValue<K,V>(key: K, value1: V, value2: V): V {
    if(typeof key === "string") {
        return value1
    } else {
        return value2
    }
}

console.log(getValue<string,number>("Yash", 30, 22))
console.log(getValue<boolean,number>(true, 30, 22))

/*
Output:
Hello
42
-------------------------------------
["Age", 30]
[true, "Yes"]
-------------------------------------
5
3
-------------------------------------
1
"a"
-------------------------------------
["x", "x", "x"]
[42, 42, 42]
-------------------------------------
Alice is 30 years old.
-------------------------------------
Yash
false
Yash
22
*/