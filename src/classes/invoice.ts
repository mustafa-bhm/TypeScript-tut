import { HasFormatter } from "../interfaces/HasFormatter.js";

// Classes
export class Invoice implements HasFormatter {
  // readonly client: string;
  // private details: string;
  // public amount: number;
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  // method
  format() {
    return `${this.client} owes $ ${this.amount} for ${this.details}`;
  }
}
