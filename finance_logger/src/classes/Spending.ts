import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Spending implements HasFormatter {
  constructor (
    readonly client: string, 
    private details: string,
    public amount: number,
  ) {};

  format() {
    return`${this.client} is spend £${this.amount} for ${this.details}`;
  }
}