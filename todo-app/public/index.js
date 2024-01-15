"use strict";
document.getElementById('todo-container__submit').addEventListener('click', (event) => {
    event.preventDefault();
    // TODO: Validacija unetih podataka
    const product = document.getElementById('todo-container__product');
    const count = document.getElementById('todo-container__count');
    console.log(product.value, count.value);
});
