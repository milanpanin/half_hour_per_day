var finance_type = document.getElementById('finance_type');
var finance_to_from = document.getElementById('finance_to_from');
var finance_details = document.getElementById('finance_details');
var finance_amount = document.getElementById('finance_amount');
var finance_submit = document.getElementById('finance_submit');
finance_submit.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(finance_type.value, finance_to_from.value, finance_details.value, finance_amount.value);
});
