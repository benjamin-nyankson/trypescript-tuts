"use strict";
const Person1 = {
    name: "Benjamin",
    age: 20,
    speak(text) {
        console.log('I speak ', text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
console.log(Person1);
