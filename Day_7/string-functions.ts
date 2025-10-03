// string-functions-demo.ts

let message123: string = " Hello, TypeScript! TypeScript is great for large-scale applications. ";

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

/*
OUTPUT  
Car Make: Toyota, Model: Corolla, Year: 2020
Hello, my name is Alice and I am 30 years old.
Hello, my name is Bob and I am 25 years old.
Original message:  Hello, TypeScript! TypeScript is great for large-scale applications. 
Message length: 70
Uppercase message:  HELLO, TYPESCRIPT! TYPESCRIPT IS GREAT FOR LARGE-SCALE APPLICATIONS. 
Buddy makes a noise.
Buddy barks loudly!
olakoya@MacBookPro Day_7 % clear        
olakoya@MacBookPro Day_7 % tsc string-functions.ts 
olakoya@MacBookPro Day_7 % node string-functions.js
Original message:  Hello, TypeScript! TypeScript is great for large-scale applications. 
Message length: 70
Uppercase message:  HELLO, TYPESCRIPT! TYPESCRIPT IS GREAT FOR LARGE-SCALE APPLICATIONS. 
Lowercase message:  hello, typescript! typescript is great for large-scale applications. 
Substring (0, 5):  Hell
Index of 'Type': 8
Replace 'TypeScript' with 'JavaScript':  Hello, JavaScript! TypeScript is great for large-scale applications. 
Trimmed message: Hello, TypeScript!
Trimmed: Hello, TypeScript! TypeScript is great for large-scale applications.
Split message by space: [
  '',
  'Hello,',
  'TypeScript!',
  'TypeScript',
  'is',
  'great',
  'for',
  'large-scale',
  'applications.',
  ''
]
Starts with 'Hello': true
Ends with 'TypeScript': false
Includes 'TypeScript'? true
Starts with 'Hello'? false
Ends with 'TypeScript'? false
Includes 'TypeScript'? true
Replaced 'TypeScript' with 'World Globally':  Hello, World Globally! World Globally is great for large-scale applications. 
*/      