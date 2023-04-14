const anchorEl = document.querySelector("a");
// console.log(anchorEl.href) <will throw an error cos ts doent have special access to the index.html page>
//ther are two ways to fix it

//<One>

if (anchorEl) {
  console.log(anchorEl.href);
}

//or simply
console.log(anchorEl?.href);

//<Two>
//add ! to the querySelector if we are certain there exist and anchor tag
const anchorEl1 = document.querySelector("a")!;
console.log(anchorEl1.href);

//to grab all form elements. || this will return an htmlFormElement
const form = document.querySelector("form")!;

//to grab a specific form || this will return just and Element
const form1 = document.querySelector(".new-item-form");
console.log(form1?.children);
// to fix this, we use the type casting
//type casting

const form2 = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form2.children);

//inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form2.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, detail.value, amount.valueAsNumber, tofrom.value);
});
