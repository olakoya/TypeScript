// string-functions-demo.ts

let message123: string = "Hello, TypeScript!";

console.log("Original message:", message123);
console.log("Message length:", message123.length);
console.log("Uppercase message:", message123.toUpperCase());
console.log("Lowercase message:", message123.toLowerCase());
console.log("Substring (0, 5):", message123.substring(0, 5));
console.log("Index of 'Type':", message123.indexOf("Type"));
console.log("Replace 'TypeScript' with 'JavaScript':", message123.replace("TypeScript", "JavaScript"));
console.log("Trimmed message:", "   Hello, TypeScript!   ".trim());
console.log("Split message by space:", message123.split(" "));
console.log("Includes 'TypeScript'?", message123.includes("TypeScript"));
console.log("Starts with 'Hello'?", message123.startsWith("Hello"));
console.log("Ends with 'TypeScript'?", message123.endsWith("TypeScript"));

/*
OUTPUT  
Original message: Hello, TypeScript!
Message length: 17
Uppercase message: HELLO, TYPESCRIPT!
Lowercase message: hello, typescript!
Substring (0, 5): Hello
Index of 'Type': 7
Replace 'TypeScript' with 'JavaScript': Hello, JavaScript!
Trimmed message: Hello, TypeScript!
Split message by space: [ 'Hello,', 'TypeScript!' ]
Includes 'TypeScript'? true
Starts with 'Hello'? true
Ends with 'TypeScript'? true
*/      