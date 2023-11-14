const finance_type = document.getElementById('finance_type') as HTMLSelectElement;
const finance_to_from = document.getElementById('finance_to_from') as HTMLInputElement;
const finance_details = document.getElementById('finance_details') as HTMLInputElement;
const finance_amount = document.getElementById('finance_amount') as HTMLInputElement;
const finance_submit = document.getElementById('finance_submit') as HTMLButtonElement;


finance_submit.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(finance_type.value, finance_to_from.value, finance_details.value, finance_amount.value);
});