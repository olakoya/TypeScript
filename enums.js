// enums-demo.ts
// Numeric Enum
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log('Numeric Enum Direction:');
var dir = Direction.North;
console.log('Direction:', dir); // Output: 0
console.log('Direction Name:', Direction[dir]); // Output: North
var dir1 = Direction.West;
console.log('Direction:', dir1); // Output: 3
console.log('Direction Name:', Direction[dir1]); // Output: West
/* Enum Direction: is restricted to use the value assigned to it in the only e.g four values: North, East, South, and West.
It's also based on zero-based index. So, North is 0, East is 1, South is 2, and West is 3.
If we try to assign any other value to the enum variable, it will throw an error.
For example, if we try to assign 4 to dir, it will throw an error.
dir = 4; // Error: Type '4' is not assignable to type 'Direction'.

OUTPUT:
Numeric Enum Direction:
Direction: 0
Direction Name: North
Direction: 3
Direction Name: West
*/
// String Enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
console.log('\nString Enum Status:');
var currentStatus = Status.Success;
console.log('Status:', Status); // Output: { 'SUCCESS': 'SUCCESS', 'FAILURE': 'FAILURE', 'PENDING': 'PENDING' }
console.log('Current Status:', currentStatus); // Output: SUCCESS
currentStatus = Status.Pending;
console.log('Updated Status:', currentStatus); // Output: PENDING
/* Enum Status: is restricted to use the value assigned to it in the only e.g three values: Success, Failure, and Pending.
It's based on string values. So, Success is "SUCCESS", Failure is "FAILURE", and Pending is "PENDING".
If we try to assign any other value to the enum variable, it will throw an error.
For example, if we try to assign "IN_PROGRESS" to currentStatus, it will throw an error.
currentStatus = "IN_PROGRESS"; // Error: Type '"IN_PROGRESS"' is not assignable to type 'Status'.

OUTPUT:
String Enum Status:
Status: { SUCCESS: 'SUCCESS', FAILURE: 'FAILURE', PENDING: 'PENDING' }
Current Status: SUCCESS
Updated Status: PENDING
*/
var Gender;
(function (Gender) {
    Gender["M"] = "Male";
    Gender["F"] = "Female";
    Gender["T"] = "Transgender";
})(Gender || (Gender = {}));
var Subjects;
(function (Subjects) {
    Subjects["M"] = "Maths";
    Subjects["S"] = "Science";
    Subjects["SS"] = "SocialStudies";
    Subjects["E"] = "English";
    Subjects["H"] = "Hindi";
})(Subjects || (Subjects = {}));
console.log('\nSubjects:', Subjects.S);
console.log('\nGender:', Gender.F);
