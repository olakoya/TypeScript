// ========================
// STATIC MEMBERS
// ========================

class Ticket {
    nameOfThePerson: string
    private static count: number;
    constructor(name: string) {
        this.nameOfThePerson = name;
        Ticket.count++;
    }

    printTicketCount() {
        return Ticket.ticketCount
    }

    static getCount() {
        this.nameOfThePerson = 
        return Ticket.ticketCount;
        
    }
}
//     getCount2() {
//         return Ticket.count;
//     }

   // static count: number = 0;
    // static getCount() {
    //     return Ticket.count;
    // }

    // Static variables are shared among all the objects of the class
    // Instance variables are unique to each object of the class
    // Static variables are accessed using the class name
    // Instance variables are accessed using the object name

    // class Ticket {

    // nameOfThePerson: string
    // seatNumber: number

    // constructor(name: string, seatNo: number) {
    //     this.nameOfThePerson = name
    //     this.seatNumber = seatNo
    // }


// * Insterview Questions:
    // Static methods cannot access instance variables
    // Example:
    // static getCount() {
    //     return this.nameOfThePerson
    // }

    // Static methods can access static variables
    // Example:
    // static getCount() {
    //     return Ticket.ticketCount
    // }

    // Non-static methods can access both instance and static variables
    // Example:
    // getCount2() {
    //     return Ticket.ticketCount
    // }

    // Instance Method can access Instance Variables
    // Example:
    // getCount2() {
    //     return this.nameOfThePerson
    // }

    // Instance Method can access Static Variables
    // Example:
    // getCount2() {
    //     return Ticket.ticketCount
    // }

    // Static Method cannot access Instance Variables
    // Example:
    // static getCount() {
    //     return this.nameOfThePerson
    // }    


    // Instant Method can access Static Variables
    // Example:
    // getCount2() {
    //     return Ticket.ticketCount
    // }

    // Instance methods can access only instance variables
    // Example:     
    // getCount2() {
    //     return this.nameOfThePerson
    // }

    // Static methods can access only static variables
    // Example:
    // static getCount() {
    //     return Ticket.ticketCount
    // }

    // Static methods cannot access instance variables
    // Example:
    // static getCount() {
    //     return this.nameOfThePerson
    // }
    // static getCount() {
    //     return Ticket.ticketCount
    // }

    // static method to get the count of tickets booked
    // Example:
    // static getCount() {
    //     return Ticket.ticketCount
    // }

    // static method to increment the count of tickets booked
    // Example:
    // static incrementCount() {
    //     Ticket.ticketCount++
    // }

    // static variable to keep track of count of tickets booked     
    // E

    // static ticketCount: number = 0
    // Non-static methods can access static variables

    // console.g("Before Object Creation")
    // console.log("Ticket Count is ", Ticket.getCount()) 
    
    // let ticket1 = new Ticket("John", 1)
    // console.log("After Creating 1st Ticket", ticket1.getCount2())
    // let ticket2 = new Ticket("Smith", 2)
    // console.log("After Creating 2nd Ticket", ticket2.getCount2())
    // let ticket3 = new Ticket("Mary", 3)
    // console.log("After Creating 3rd Ticket", ticket3.getCount2())
    // console.log("Ticket Count is ", Ticket.getCount())

//     class Ticket {
//     nameOfThePerson: string;
//     seatNumber: number;

//     constructor(name: string, seatNo: number) {
//         this.nameOfThePerson = name;
//         this.seatNumber = seatNo;
//     }

//     // ✅ static property to keep track of count
//     static count: number = 0;
// }

// ✅ create tickets outside the class
let ticket1 = new Ticket("John", 1);
Ticket.count++;

let ticket2 = new Ticket("Smith", 2);
Ticket.count++;

let ticket3 = new Ticket("Mary", 3);
Ticket.count++;

let ticket4 = new Ticket("Maria", 4);
Ticket.count++;

let ticket5 = new Ticket("Martha", 5);
Ticket.count++;

console.log("Total tickets booked:", Ticket.count);

