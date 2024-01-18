const addRowToTable = (table, productInfo) => {
    const row = `
    <tr>
      <td>${productInfo.product}</td>
      <td>${productInfo.count}</td>
    </tr>
  `;
    table.innerHTML += row;
};
document.getElementById('todo-container__submit').addEventListener('click', (event) => {
    event.preventDefault();
    // TODO: Validacija unetih podataka
    const product = document.getElementById('todo-container__product');
    const count = document.getElementById('todo-container__count');
    const table = document.getElementById('todo-container__table-body');
    addRowToTable(table, { product: product.value, count: parseInt(count.value) });
});
export {};
