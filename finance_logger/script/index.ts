const finance_type = document.getElementById('finance_type') as HTMLSelectElement;
const finance_to_from = document.getElementById('finance_to_from') as HTMLInputElement;
const finance_details = document.getElementById('finance_details') as HTMLInputElement;
const finance_amount = document.getElementById('finance_amount') as HTMLInputElement;
const finance_submit = document.getElementById('finance_submit') as HTMLButtonElement;
const finance_table = document.getElementById('finance_table_body') as HTMLTableElement;

type finance_type = {
  type: string,
  to_from: string,
  details: string,
  amount: number,
}

const printNewFinance = (financeBlock: finance_type) => {
  const financeRow = document.createElement('tr');
  financeRow.innerHTML = `
    <td>${financeBlock.type}</td>
    <td>${financeBlock.to_from}</td>
    <td>${financeBlock.details}</td>
    <td>${financeBlock.amount}</td>
  `;

  finance_table.appendChild(financeRow);
};

finance_submit.addEventListener('click', (event) => {
  event.preventDefault();

  const financeBlock = {
    type: finance_type.value,
    to_from: finance_to_from.value,
    details: finance_details.value,
    amount: finance_amount.valueAsNumber,
  };

  printNewFinance(financeBlock);
});