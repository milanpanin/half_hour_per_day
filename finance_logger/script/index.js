var finance_type = document.getElementById('finance_type');
var finance_to_from = document.getElementById('finance_to_from');
var finance_details = document.getElementById('finance_details');
var finance_amount = document.getElementById('finance_amount');
var finance_submit = document.getElementById('finance_submit');
var finance_table = document.getElementById('finance_table_body');
var printNewFinance = function (financeBlock) {
    var financeRow = document.createElement('tr');
    financeRow.innerHTML = "\n    <td>".concat(financeBlock.type, "</td>\n    <td>").concat(financeBlock.to_from, "</td>\n    <td>").concat(financeBlock.details, "</td>\n    <td>").concat(financeBlock.amount, "</td>\n  ");
    finance_table.appendChild(financeRow);
};
finance_submit.addEventListener('click', function (event) {
    event.preventDefault();
    var financeBlock = {
        type: finance_type.value,
        to_from: finance_to_from.value,
        details: finance_details.value,
        amount: finance_amount.valueAsNumber,
    };
    printNewFinance(financeBlock);
});
