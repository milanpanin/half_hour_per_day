"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Payment_1 = require("./classes/Payment");
var Spending_1 = require("./classes/Spending");
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
var paymentTransations = [];
var spendingTransations = [];
finance_submit.addEventListener('click', function (event) {
    event.preventDefault();
    if (finance_type.value = '1') {
        var payment = new Payment_1.Payment(finance_to_from.value, finance_details.value, finance_amount.valueAsNumber);
        paymentTransations.push(payment);
    }
    else {
        var spending = new Spending_1.Spending(finance_to_from.value, finance_details.value, finance_amount.valueAsNumber);
        spendingTransations.push(spending);
    }
    console.log(paymentTransations);
    console.log(spendingTransations);
    // printNewFinance(financeBlock);
});
