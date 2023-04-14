import { Invoice } from "./Classes/Invoice.js";
import { Payments } from "./Classes/Payment.js";
import { ListTemplate } from "./Classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const detail = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
let doc;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!tofrom.value || !detail.value || !amount.valueAsNumber) {
        return;
    }
    else {
        const transaction = type.value === "invoice"
            ? (doc = new Invoice(tofrom.value, detail.value, amount.valueAsNumber))
            : (doc = new Payments(tofrom.value, detail.value, amount.valueAsNumber));
        console.log(transaction);
        list.render(transaction, type.value, "end");
    }
});
