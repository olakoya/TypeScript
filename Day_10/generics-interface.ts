// Generics Interface
// This allows us to create reusable components
// Generics provide a way to make components work with any data type and not restrict to one data type
// This allows users to consume these components with their own data types

// Generic Interface Syntax
// interface InterfaceName<T> {
//     property: T;
//     method(arg: T): T;
// }

// Example 1: A simple generic interface
interface Box<T> {
    contents: T;
}

let stringBox: Box<string> = { contents: "Hello, World!" };
let numberBox: Box<number> = { contents: 42 };

console.log(stringBox.contents); // Output: Hello, World!
console.log(numberBox.contents); // Output: 42
console.log("-------------------------------------")

// Example 2: Generic interface with multiple type parameters
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<string, number> = { first: "Age", second: 30 };
console.log(pair); // Output: { first: 'Age', second: 30 }
console.log("-------------------------------------")

// Example 3: Generic interface with methods
interface Repository<T> {
    getById(id: number): T | null;
    getAll(): T[];
}

class InMemoryRepository<T> implements Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getById(id: number): T | null {
        return this.items[id] || null;
    }

    getAll(): T[] {
        return this.items;
    }
}

const userRepository = new InMemoryRepository<{ name: string; age: number }>();
userRepository.add({ name: "Alice", age: 30 });
userRepository.add({ name: "Bob", age: 25 });

console.log(userRepository.getById(0)); // Output: { name: 'Alice', age: 30 }
console.log(userRepository.getAll()); // Output: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]
console.log("-------------------------------------")

// Example 4: Generic interface with constraints
interface Identifiable {
    id: number;
}

interface EntityRepository<T extends Identifiable> {
    getById(id: number): T | null;
    getAll(): T[];
}

class SqlRepository<T extends Identifiable> implements EntityRepository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getById(id: number): T | null {
        return this.items.find(item => item.id === id) || null;
    }

    getAll(): T[] {
        return this.items;
    }
}

const productRepository = new SqlRepository<{ id: number; name: string }>();
productRepository.add({ id: 1, name: "Laptop" });
productRepository.add({ id: 2, name: "Phone" });

console.log(productRepository.getById(1)); // Output: { id: 1, name: 'Laptop' }
console.log(productRepository.getAll()); // Output: [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }]
console.log("-------------------------------------")

// Example 5: Nested generic interfaces
interface ApiResponse<T> {
    data: T;
    error?: string;
}

function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    return new Promise((resolve) => {
        // Simulate fetching data
        setTimeout(() => {
            resolve({ data: {} as T });
        }, 1000);
    });
}

fetchData<{ name: string; age: number }>("https://api.example.com/user")
    .then(response => {
        console.log(response.data); // Output: {}
    });
console.log("-------------------------------------")

// Example 6: Generic interface with readonly properties
interface ReadonlyBox<T> {
    readonly contents: T;
}

let readonlyStringBox: ReadonlyBox<string> = { contents: "Immutable" };
console.log(readonlyStringBox.contents); // Output: Immutable
// readonlyStringBox.contents = "Change"; // Error: Cannot assign to 'contents' because it is a read-only property.
console.log("-------------------------------------")

export {}

// Exception Handling in TypeScript

function basicTryCatch() {
    try {
        // Code that may throw an error
        let result = 10 / 0; // This will not throw an error in JS/TS, but let's assume it does
        console.log("Result:", result);
    } catch (e) {
        console.log("Caught an error:", (e as Error).message);
    } finally {
        console.log("Finally block executed");
    }
}

function tryFinallyOnly() {                                     
    try {
        console.log("Executing try block");
    } finally {
        console.log("Finally block executed without catch");
    }
}   
// Note: In TypeScript/JavaScript, dividing by zero does not throw an error; it results in Infinity.
// To demonstrate exception handling, we can manually throw an error. 
// Hence, the divide function below throws an error when division by zero is attempted. 
// This is just for demonstration purposes.
// Example 1: Basic try-catch-finally
// Example 2: try-finally without catch
// Example 3: Function that throws error manually
// Example 4: Using custom error class
// Example 5: Type guarding inside catch block

// Example 1 and 2 are implemented above

// ✅ 3. Function that throws error manually
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// ✅ 4. Using custom error class
class ArithmeticError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ArithmeticError";
    }
}

function safeDivide(a: number, b: number): number {
    if (b === 0) {
        throw new ArithmeticError("Custom: Division by zero is illegal");
    }
    return a / b;
}

// ✅ 5. Type guarding inside catch block
function guardedCatchExample() {
    try {
        throw new Error("Example error");
    } catch (e) {
        if (e instanceof Error) {
            console.log("Guarded catch:", e.message);
        } else {
            console.log("Unknown error type:", e);
        }
    }
}

// ✅ Run all examples
console.log("\n--- 1. Basic try-catch-finally ---");
basicTryCatch();

console.log("\n--- 2. try-finally without catch ---");
tryFinallyOnly();

console.log("\n--- 3. Manual throw example ---");
try {
    const result = divide(10, 0); // Change to 2 to test happy path
    console.log("Result:", result);
} catch (e) {
    console.log("Manual throw caught:", (e as Error).message);
}

console.log("\n--- 4. Custom error class example ---");
try {
    const result = safeDivide(5, 0);
    console.log("Result:", result);
} catch (e) {
    if (e instanceof ArithmeticError) {
        console.log("Caught ArithmeticError:", e.message);
    } else if (e instanceof Error) {
        console.log("Caught generic Error:", e.message);
    }
}

console.log("\n--- 5. Guarded catch example ---");
guardedCatchExample();  
/*Output:
--- 1. Basic try-catch-finally ---
Caught an error: Cannot divide by zero
Finally block executed

--- 2. try-finally without catch ---
Executing try block
Finally block executed without catch

--- 3. Manual throw example ---
Manual throw caught: Cannot divide by zero              

--- 4. Custom error class example ---
Caught ArithmeticError: Custom: Division by zero is illegal

--- 5. Guarded catch example ---
Guarded catch: Example error
*/  
console.log("=====================================")

export {}

interface Item <T> {
    productName: T,
}

let item1: Item<number> = {
    productName: 0
}

console.log(item1)

let item2: Item<string> = {
    productName: "Pen"
}

console.log(item2)

let item3: Item<boolean> = {
    productName: false
}

console.log(item3)

/*
Output:
{ productName: 0 }
{ productName: 'Pen' }
{ productName: false }
*/



