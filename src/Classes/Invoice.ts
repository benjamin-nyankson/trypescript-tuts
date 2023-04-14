import { HasFormater } from "../Interfaces/HasFormater.js";
export class Invoice implements HasFormater {
  constructor(
    readonly client: string,
    private details: string,
    private amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
