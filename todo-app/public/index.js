/**
 * Adds a new row to the table with the provided product information.
 * @param table - The HTML table element to add the row to.
 * @param productInfo - The information of the product to be displayed in the row.
 */
const addRowToTable = (table, productInfo) => {
    const rowID = Math.random();
    const row = `
    <tr rowID=${rowID}>
      <td>${productInfo.product}</td>
      <td>${productInfo.count}</td>
      <td><span class="todo-container__delete">Delete</span></td>
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
    addEventListener();
});
/**
 * Adds event listeners to delete buttons in the todo list.
 */
const addEventListener = () => {
    const deleteButtons = document.querySelectorAll('.todo-container__delete');
    deleteButtons.forEach((element) => {
        const button = element;
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const row = event.target.closest('tr');
            if (row) {
                row.remove();
            }
        });
    });
};
export {};
