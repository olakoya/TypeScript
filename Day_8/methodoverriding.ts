// // What is Polymorphism?
// // Polymorphism is a concept in OOP that allows methods to do different things based on the object it is acting upon.
// // It allows methods to be used in different ways based on the object that is calling them.

// // Method Overriding
// // Method overriding is a feature that allows a subclass or child class to provide a specific implementation of a method that is already defined in its superclass or parent class.
// // When a method in a subclass has the same name, same parameters or signature, and same return type(or sub-type) as a method in its super-class, then the method in the subclass is said to override the method in the super-class.

// class NewPerson {
//   protected name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(): void {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class NewStudent extends NewPerson {
//   rollNo: number;

//   constructor(name: string, rollNo: number) {
//     super(name); // ✅ call parent constructor
//     this.rollNo = rollNo;
//   }

//   getName(): string {
//     return this.name; // ✅ allowed because 'name' is protected
//   }

//   // ✅ override greet() from parent
//   greet(): void {
//     console.log(`Hello, my name is ${this.name} and my roll number is ${this.rollNo}`);
//   }
// }

// // ✅ Example usage
// const person = new NewPerson("Alice");
// person.greet(); // Output: Hello, my name is Alice

// const student1 = new NewStudent("Ola", 7);
// student1.greet();           // Output: Hello, my name is Ola and my roll number is 7
// console.log(student1.getName()); // Output: Ola

// const student2 = new NewStudent("Bob", 101);
// student2.greet(); // Output: Hello, my name is Bob and my roll number is is 101

// // Method Overloading
// // Method overloading allows a class to have multiple methods with the same name but different parameters.
// // This is useful when you want to perform similar operations with different types or numbers of arguments.

// // Here's an example of method overloading
// class Calculator {
//     // Overloaded method signatures
//     add(a: number, b: number): number;
//     add(a: string, b: string): string;
//     add(a: number, b: number, c: number): number;

//     // Method implementation (single definition)
//     add(a: any, b: any, c?: any): any {
//         if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
//             return a + b + c; // Adding three numbers
//         } 
//         else if (typeof a === 'number' && typeof b === 'number') {
//             return a + b; // Adding two numbers
//         } 
//         else if (typeof a === 'string' && typeof b === 'string') {
//             return a + b; // Concatenating two strings
//         } 
//         else {
//             throw new Error("Invalid arguments");
//         }
//     }
// }

// ===============================
// 🔷 POLYMORPHISM & METHOD OVERRIDING
// ===============================

// Polymorphism allows the same method to behave differently
// depending on which object (class instance) is calling it.

class NewPerson {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class NewStudent extends NewPerson {
  rollNo: number;

  constructor(name: string, rollNo: number) {
    super(name); // ✅ Call the parent class constructor
    this.rollNo = rollNo;
  }

  getName(): string {
    return this.name; // ✅ Allowed because 'name' is protected
  }

  // ✅ Override the greet() method from parent
  greet(): void {
    console.log(`Hello, my name is ${this.name} and my roll number is ${this.rollNo}`);
  }
}

// ✅ Example usage
const person = new NewPerson("Alice");
person.greet(); // Output: Hello, my name is Alice

const student1 = new NewStudent("Ola", 7);
student1.greet(); // Output: Hello, my name is Ola and my roll number is 7
console.log(student1.getName()); // Output: Ola

const student2 = new NewStudent("Bob", 101);
student2.greet(); // Output: Hello, my name is Bob and my roll number is 101



// ===============================
// 🔶 METHOD OVERLOADING
// ===============================

// Method overloading allows multiple method signatures
// with the same name but different parameter lists.

class Calculator {
  // Overloaded method signatures
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: number, b: number, c: number): number;

  // Method implementation (single definition)
  add(a: any, b: any, c?: any): any {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
      return a + b + c; // Adding three numbers
    } 
    else if (typeof a === 'number' && typeof b === 'number') {
      return a + b; // Adding two numbers
    } 
    else if (typeof a === 'string' && typeof b === 'string') {
      return a + b; // Concatenating two strings
    } 
    else {
      throw new Error("Invalid arguments");
    }
  }
}

// ✅ Example usage
const calc = new Calculator();
console.log(calc.add(5, 10));          // ➜ 15
console.log(calc.add(5, 10, 15));      // ➜ 30
console.log(calc.add("Hello, ", "Ola")); // ➜ Hello, Ola
