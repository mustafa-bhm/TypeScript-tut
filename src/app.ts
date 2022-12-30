import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Mike", "web work", 250);
// docTwo = new Payment("Alex", "server work", 300);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: IsPerson = {
//   name: "Tom",
//   age: 32,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log(` I spent , ${amount}`);
//     return amount;
//   },
// };

// const greetPerson = (person: IsPerson) => {
//   console.log("hello", person.name);
// };
// greetPerson(me);

// // to create invoices
// const invoice1 = new Invoice("tom", "work done", 300);
// const invoice2 = new Invoice("mike", "work done 2", 200);

// let invoices: Invoice[] = [];
// invoices.push(invoice1);
// invoices.push(invoice2);

// console.log(invoices);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

// inputs
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// add event listener

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
});
