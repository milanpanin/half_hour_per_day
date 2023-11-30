export class Spending {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.client} is spend £${this.amount} for ${this.details}`;
    }
}
