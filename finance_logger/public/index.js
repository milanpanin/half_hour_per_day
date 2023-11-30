import { Payment } from "./classes/Payment.js";
import { Spending } from "./classes/Spending.js";
const finance_type = document.getElementById('finance_type');
const finance_to_from = document.getElementById('finance_to_from');
const finance_details = document.getElementById('finance_details');
const finance_amount = document.getElementById('finance_amount');
const finance_submit = document.getElementById('finance_submit');
const finance_profit_table = document.getElementById('finance_profit_table_body');
const finance_spending_table = document.getElementById('finance_spending_table_body');
const printNewFinance = (financeBlock) => {
    const financeRow = document.createElement('tr');
    financeRow.innerHTML = `
    <td>${financeBlock.to_from}</td>
    <td>${financeBlock.details}</td>
    <td>${financeBlock.amount}</td>
  `;
    if (financeBlock.type === 'profit') {
        finance_profit_table.appendChild(financeRow);
    }
    else {
        finance_spending_table.appendChild(financeRow);
    }
};
const paymentTransations = [];
const spendingTransations = [];
finance_submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (finance_type.value === 'profit') {
        const payment = new Payment(finance_to_from.value, finance_details.value, finance_amount.valueAsNumber);
        paymentTransations.push(payment);
        // printNewFinance(paymentTransations);
    }
    else {
        const spending = new Spending(finance_to_from.value, finance_details.value, finance_amount.valueAsNumber);
        spendingTransations.push(spending);
        // printNewFinance(spendingTransations);
    }
});
