import { Payment } from "./classes/Payment";
import { Spending } from "./classes/Spending";

const finance_type = document.getElementById('finance_type') as HTMLSelectElement;
const finance_to_from = document.getElementById('finance_to_from') as HTMLInputElement;
const finance_details = document.getElementById('finance_details') as HTMLInputElement;
const finance_amount = document.getElementById('finance_amount') as HTMLInputElement;
const finance_submit = document.getElementById('finance_submit') as HTMLButtonElement;
const finance_table = document.getElementById('finance_table_body') as HTMLTableElement;

type finance_types = {
  type: string,
  to_from: string,
  details: string,
  amount: number,
}

const printNewFinance = (financeBlock: finance_types) => {
  const financeRow = document.createElement('tr');
  financeRow.innerHTML = `
    <td>${financeBlock.type}</td>
    <td>${financeBlock.to_from}</td>
    <td>${financeBlock.details}</td>
    <td>${financeBlock.amount}</td>
  `;

  finance_table.appendChild(financeRow);
};

const paymentTransations: Payment[] = [];
const spendingTransations: Spending[] = [];

finance_submit.addEventListener('click', (event) => {
  event.preventDefault();

  if (finance_type.value = '1') {
    const payment = new Payment(finance_to_from.value, finance_details.value, finance_amount.valueAsNumber);
    paymentTransations.push(payment);
  } else {
    const spending = new Spending(finance_to_from.value, finance_details.value, finance_amount.valueAsNumber);
    spendingTransations.push(spending);
  }


  console.log(paymentTransations);
  console.log(spendingTransations);
  
  // printNewFinance(financeBlock);
});