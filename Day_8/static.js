// ========================
// STATIC MEMBERS
// ========================
// class Ticket {
//     nameOfThePerson: string
//     private static count: number;
//     constructor(name: string) {
//         this.nameOfThePerson = name;
//         Ticket.count++;
//     }
//     static getCount() {
//         return Ticket.count;
//     }
// }
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
// Static methods cannot access instance variables
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
var Ticket = /** @class */ (function () {
    function Ticket(name, seatNo) {
        this.nameOfThePerson = name;
        this.seatNumber = seatNo;
    }
    // ✅ static property to keep track of count
    Ticket.count = 0;
    return Ticket;
}());
// ✅ create tickets outside the class
var ticket1 = new Ticket("John", 1);
Ticket.count++;
var ticket2 = new Ticket("Smith", 2);
Ticket.count++;
var ticket3 = new Ticket("Mary", 3);
Ticket.count++;
var ticket4 = new Ticket("Maria", 4);
Ticket.count++;
var ticket5 = new Ticket("Martha", 5);
Ticket.count++;
console.log("Total tickets booked:", Ticket.count);
