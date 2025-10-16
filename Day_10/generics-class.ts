// Generics in Class
// Generics is a way to create reusable components
// Generics provide a way to make components work with any data type and not restrict to one data type
// This allows users to consume these components with their own data types

// Without Generics 


class DataStore {

    private items: number [] = []
    addItem(item: number): void {
        this.items.push(item)
    }

    getAllItems(): number[] {
        return this.items
    }

}

const dStore = new DataStore()
dStore.addItem(1)
console.log(dStore.getAllItems())


class DataStoreString {
    private items: string [] = []
    addItem(item: string): void {
        this.items.push(item)
    }

    getAllItems(): string[] {
        return this.items
    }
}

const dStore2 = new DataStoreString()
dStore2.addItem("Pen")
console.log(dStore2.getAllItems())

interface Item {
    productName: string
    productAge: number
}

class DataStoreItem {
    private items: Item [] = []
    addItem(item: Item): void {
        this.items.push(item)
    }

    getAllItems(): Item[] {
        return this.items
    }
}

const dStore3 = new DataStoreItem()
let item: Item = {
    productName: "Pen",
    productAge: 10
}
dStore3.addItem(item)
console.log(dStore3.getAllItems())


class DataStoreGeneric<T> {
    private items: T [] = []
    addItem(item: T): void {
        this.items.push(item)
    }

    getAllItems(): T[] {
        return this.items
    }
}

console.log("------------Differentiating--------------")

const dStoreGeneric1 = new DataStoreGeneric<number>()
dStoreGeneric1.addItem(1)
console.log(dStoreGeneric1.getAllItems())

const dStoreGeneric2 = new DataStoreGeneric<string>()
dStoreGeneric2.addItem("Pen")
console.log(dStoreGeneric2.getAllItems())

const dStoreGeneric3 = new DataStoreGeneric<Item>()
let item2: Item = {
    productName: "Pen",
    productAge: 10
}
dStoreGeneric3.addItem(item)
console.log(dStoreGeneric3.getAllItems())

/*
Output:
[ 1 ]
[ 'Pen' ]
[ { productName: 'Pen', productAge: 10 } ]
*/  