// string-functions-demo.ts
var message123 = " Hello, TypeScript! TypeScript is great for large-scale applications. ";
console.log("Original message:", message123); // Using console.log to display the message
console.log("Message length:", message123.length); // Length of the string
console.log("Uppercase message:", message123.toUpperCase()); // Convert to uppercase
console.log("Lowercase message:", message123.toLowerCase()); // Convert to lowercase
console.log("Substring (0, 5):", message123.substring(0, 5)); // Extract substring
console.log("Index of 'Type':", message123.indexOf("Type")); // Find index of substring
console.log("Replace 'TypeScript' with 'JavaScript':", message123.replace("TypeScript", "JavaScript")); // Replace substring
console.log("Trimmed message:", "   Hello, TypeScript!   ".trim()); // Trim whitespace. 
console.log("Trimmed:", message123.trim()); // Trim whitespace. Remove leading and trailing/heading spaces
console.log("Split message by space:", message123.split(" ")); // Split string into array
console.log("Starts with 'Hello':", message123.trim().startsWith("Hello")); // Check if string starts with the given value
console.log("Ends with 'TypeScript':", message123.trim().endsWith("TypeScript")); // Check if string ends with the given value
console.log("Includes 'TypeScript'?", message123.includes("TypeScript")); // Check if substring exists
console.log("Starts with 'Hello'?", message123.startsWith("Hello")); // Check start of string
console.log("Ends with 'TypeScript'?", message123.endsWith("TypeScript")); // Check end of string
console.log("Includes 'TypeScript'?", message123.includes("TypeScript")); // Check if substring exists
console.log("Replaced 'TypeScript' with 'World Globally':", message123.replace(/TypeScript/g, "World Globally")); // Replace all occurrences of 'TypeScript' with 'World Globally'
console.log('----------------------------------------------------');
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
Includes 'TypeScript'? true
Replaced 'TypeScript' with 'World Globally': Hello, World Globally!
*/ 
