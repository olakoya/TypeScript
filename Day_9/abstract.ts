// ABSTRACT-DEMO.TS//
// Abstract is a class that cannot be instantiated directly. It is meant to be subclassed, and it can contain abstract methods that must be implemented by subclasses.
// Abstract classes are useful for defining a common interface and shared behavior for a group of related classes.

// Example:
abstract class Animal {
    abstract makeSound(): void; // Abstract method (must be implemented by subclasses)

    move(): void { // Concrete method (can be used by subclasses)
        console.log("The animal moves.");
    }
}

class Dog extends Animal {
    makeSound(): void { // Implementation of the abstract method
        console.log("The dog barks.");
    }
}       
class Cat extends Animal {
    makeSound(): void { // Implementation of the abstract method
        console.log("The cat meows.");
    }
}

const myDog = new Dog();
myDog.makeSound(); // Output: The dog barks.
myDog.move();      // Output: The animal moves.

const myCat = new Cat();
myCat.makeSound(); // Output: The cat meows.
myCat.move();      // Output: The animal moves.

// Abstract classes cannot be instantiated directly
// const myAnimal = new Animal(); // Error: Cannot create an instance of an abstract class.

/*
Output:
The dog barks.
The animal moves.
The cat meows.
The animal moves.
*/

