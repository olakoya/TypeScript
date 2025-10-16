// Generics in Class
// Generics is a way to create reusable components
// Generics provide a way to make components work with any data type and not restrict to one data type
// This allows users to consume these components with their own data types
// Without Generics 
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.items = [];
    }
    DataStore.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DataStore.prototype.getAllItems = function () {
        return this.items;
    };
    return DataStore;
}());
var dStore = new DataStore();
dStore.addItem(1);
console.log(dStore.getAllItems());
var DataStoreString = /** @class */ (function () {
    function DataStoreString() {
        this.items = [];
    }
    DataStoreString.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DataStoreString.prototype.getAllItems = function () {
        return this.items;
    };
    return DataStoreString;
}());
var dStore2 = new DataStoreString();
dStore2.addItem("Pen");
console.log(dStore2.getAllItems());
var DataStoreItem = /** @class */ (function () {
    function DataStoreItem() {
        this.items = [];
    }
    DataStoreItem.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DataStoreItem.prototype.getAllItems = function () {
        return this.items;
    };
    return DataStoreItem;
}());
var dStore3 = new DataStoreItem();
var item = {
    productName: "Pen",
    productAge: 10
};
dStore3.addItem(item);
console.log(dStore3.getAllItems());
var DataStoreGeneric = /** @class */ (function () {
    function DataStoreGeneric() {
        this.items = [];
    }
    DataStoreGeneric.prototype.addItem = function (item) {
        this.items.push(item);
    };
    DataStoreGeneric.prototype.getAllItems = function () {
        return this.items;
    };
    return DataStoreGeneric;
}());
console.log("------------Differentiating--------------");
var dStoreGeneric1 = new DataStoreGeneric();
dStoreGeneric1.addItem(1);
console.log(dStoreGeneric1.getAllItems());
var dStoreGeneric2 = new DataStoreGeneric();
dStoreGeneric2.addItem("Pen");
console.log(dStoreGeneric2.getAllItems());
var dStoreGeneric3 = new DataStoreGeneric();
var item2 = {
    productName: "Pen",
    productAge: 10
};
dStoreGeneric3.addItem(item);
console.log(dStoreGeneric3.getAllItems());
