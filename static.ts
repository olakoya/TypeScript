// ==========================
// STATIC DATA
// ==========================

// Its used to store fixed values that are used in multiple places in the codebase
// This helps in maintaining consistency and makes it easier to update values in one place
// It can include configuration settings, default values, constants, etc.

class Ticket {
    passengerName: string;
    seatNumber: number;

    constructor(passengerName: string, seatNumber: number) {
        this.passengerName = passengerName;
        this.seatNumber = seatNumber;
    }
}

let fruits = ["Apple", "Banana", "Orange", "Mango"]

/*
OUTPUT
Apple
Banana
Orange
Mango
*/  



const STATIC = {
  // Default values
  DEFAULT: {
    PORT: 3000,
    HOST: 'localhost',
    API_PREFIX: '/api',
    JWT_EXPIRATION: '1h',
    BCRYPT_SALT_ROUNDS: 10,
  },

  // Supported languages
  LANGUAGES: ['en', 'es', 'fr', 'de', 'zh'],

  // User roles
  ROLES: {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
  },

  // HTTP Status Codes
  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },

  // Commonly used regex patterns
  REGEX: {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    URL: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
    PHONE: /^\+?[1-9]\d{1,14}$/,
  },

  // File paths
  PATHS: {
    UPLOADS: '/var/www/uploads',
    LOGS: '/var/log/app',
    CONFIG: '/etc/app/config.json',
  },

  // Environment types
  ENVIRONMENTS: {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
    TESTING: 'testing',
  },
};

module.exports = { STATIC };

// ==========================
// LOOPS
// ==========================

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

let count = 1;
let ticket1: Ticket = new Ticket("Ola", 1)
count = count + 1;
let ticket2: Ticket = new Ticket("Bush", 2)
count = count + 1;
let ticket3: Ticket = new Ticket("Biden", 3)
count = count + 1;
let ticket4: Ticket = new Ticket("Trump", 4)
count = count + 1;
let ticket5: Ticket = new Ticket("Clinton", 5)
count = count + 1;

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