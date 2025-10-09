// Method Overloading in TypeScript
// Method overloading allows a class to have multiple methods with the same name but different parameters.
// This is useful when you want to perform similar operations with different types or numbers of arguments.

// Here's an example of method overloading
class Calculator {
    // Overloaded method signatures
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: number, b: number, c: number): number;

    // Method implementation
    add(a: any, b: any, c?: any): any {
        if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
            return a + b + c; // Adding three numbers
        } else if (typeof a === 'number' && typeof b === 'number') {
            return a + b; // Adding two numbers
        } else if (typeof a === 'string' && typeof b === 'string') {
            return a + b; // Concatenating two strings
        }
        throw new Error('Invalid arguments');
    }
}

// Usage
const calculator = new Calculator();

console.log(calculator.add(5, 10)); // Output: 15 (Adding two numbers)
console.log(calculator.add('Hello, ', 'World!')); // Output: Hello, World! (Concatenating two strings)
console.log(calculator.add(5, 10, 15)); // Output: 30 (Adding three numbers)xample:

/*
Output:
15
Hello, World!
30
*/

// Example 2

class MethodOL2 {
  // ✅ Overloads
  greet(name: string): string;
  greet(times: number): string;

  // ✅ Implementation
  greet(arg: any): string {
    if (typeof arg === 'string') {
      return `Hello, ${arg}!`;
    } else if (typeof arg === 'number') {
      return `Hello! (repeated ${arg} times)`;
    } else {
      throw new Error("Invalid argument type for greet");
    }
  }

  // ✅ Overloads for add
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  // ✅ Implementation
  add(a: any, b: any): any {
    if (typeof a === 'string' && typeof b === 'string') {
      console.log("Returning string concatenation");
      return a + b;
    } else if (typeof a === 'number' && typeof b === 'number') {
      console.log("Returning numeric addition");
      return a + b;
    } else {
      throw new Error("Invalid argument types for add");
    }
  }

  // ✅ Simple logging method
  log(message: string, level: string = "INFO"): void {
    console.log(`[${level}] ${message}`);
  }
}

// ✅ Usage
const mol = new MethodOL2();

console.log(mol.greet("Ola"));        // Hello, Ola!
console.log(mol.greet(3));            // Hello! (repeated 3 times)
mol.log("This is an info message");
mol.log("This is a warning message", "WARN");
console.log(mol.add(5, 10));          // 15
console.log(mol.add('Hello, ', 'Ola!')); // Hello, Ola!

