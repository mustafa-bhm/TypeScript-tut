"use strict";
// Classes
class Invoice {
    constructor(c, d, a) {
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
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// inputs
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// add event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
