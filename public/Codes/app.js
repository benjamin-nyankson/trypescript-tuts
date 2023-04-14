"use strict";
const anchorEl = document.querySelector("a");
// console.log(anchorEl.href) <will throw an error cos ts doent have special access to the index.html page>
//ther are two ways to fix it
//<One>
if (anchorEl) {
    console.log(anchorEl.href);
}
//or simply
console.log(anchorEl === null || anchorEl === void 0 ? void 0 : anchorEl.href);
//<Two>
//add ! to the querySelector if we are certain there exist and anchor tag
const anchorEl1 = document.querySelector("a");
console.log(anchorEl1.href);
//to grab all form elements. || this will return an htmlFormElement
const form = document.querySelector("form");
//to grab a specific form || this will return just and Element
const form1 = document.querySelector(".new-item-form");
console.log(form1 === null || form1 === void 0 ? void 0 : form1.children);
// to fix this, we use the type casting
//type casting
const form2 = document.querySelector(".new-item-form");
console.log(form2.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const detail = document.querySelector("#details");
const amount = document.querySelector("#amount");
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, detail.value, amount.valueAsNumber, tofrom.value);
});
