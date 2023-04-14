import { Invoice } from "./Classes/Invoice.js";
import { Payments } from "./Classes/Payment.js";
import { HasFormater } from "./Interfaces/HasFormater.js";
import { ListTemplate } from "./Classes/ListTemplate.js";
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
let doc: HasFormater;
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  if (!tofrom.value || !detail.value || !amount.valueAsNumber) {
    return;
  } else {
    const transaction =
      type.value === "invoice"
        ? (doc = new Invoice(tofrom.value, detail.value, amount.valueAsNumber))
        : (doc = new Payments(
            tofrom.value,
            detail.value,
            amount.valueAsNumber
          ));
    console.log(transaction);
    list.render(transaction, type.value, "end");
  }
});
