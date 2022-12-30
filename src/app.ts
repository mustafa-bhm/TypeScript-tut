// Classes

class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  // method
  format() {
    return `${this.client} owes $ ${this.amount} for ${details}`;
  }
}
// to create invoices
const invoice1 = new Invoice("tom", "work done", 300);
const invoice2 = new Invoice("mike", "work done 2", 200);

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

console.log(invoices);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

// inputs
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// add event listener

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
