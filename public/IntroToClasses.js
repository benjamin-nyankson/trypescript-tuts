"use strict";
// all properties are public by default
// all properties can be accessed outside the class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
//instance of the class
const InvoiceOne = new Invoice("Benjamin", "Extra classes", 100);
const InvoiceTwo = new Invoice("Miles", "Extra classes", 400);
console.log(InvoiceOne);
//array with invoice as type
let invoices = [];
// invoices.push('Benji') will thrwo an error
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
console.log(invoices);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.details, invoice.format());
});
//Private class
//properties cannot be accessed outside the class
//they can be accessed indirectly
class Person {
    constructor(name, age, location, maried) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.married = maried;
    }
    format() {
        return `${this.name} comes from ${this.location}, he is ${this.age} years old and he is ${this.married === true ? " married" : "not married"}`;
    }
}
const personOne = new Person("Benjamin", 22, "Mankessim", true);
const personTwo = new Person("Miles", 24, "Mankessim", false);
let people = [];
people.push(personOne);
people.push(personTwo);
console.log(people);
people.forEach((person) => {
    console.log(person.format()); //access the property indirectly
    // console.log(person.name) //will throw an error, because it's private and its been accessed outside the class
});
//if you are using access modifiers infront of the properties, you can simply destructure the properties in the constructor,
// and the values will be automatically assigned to the properties of the class
class Car {
    constructor(name, color, year) {
        this.name = name;
        this.color = color;
        this.year = year;
    }
    format() {
        return `the ${this.color} ${this.name} was desined in ${this.year}`;
    }
}
const newCar = new Car("Toyota", "Blue", 2015);
const newCar1 = new Car("Hyundai", "White", 2014);
const Cars = [];
Cars.push(newCar);
Cars.push(newCar1);
console.log(Cars);
Cars.forEach((car) => {
    console.log(car.format());
});
