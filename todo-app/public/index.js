/**
 * Adds a new row to the table with the provided product information.
 * @param table - The HTML table element to add the row to.
 * @param productInfo - The information of the product to be displayed in the row.
 */
const addRowToTable = (table, productInfo) => {
    const row = `
    <tr>
      <td class='product-name'>${productInfo.product}</td>
      <td class='product-count'>${productInfo.count}</td>
      <td><span class="todo-container__delete">💀</span> <span class="todo-container__edit">🤢</span></td>
    </tr>
  `;
    table.innerHTML += row;
};
document.getElementById('todo-container__submit').addEventListener('click', (event) => {
    event.preventDefault();
    const product = document.getElementById('todo-container__product');
    const count = document.getElementById('todo-container__count');
    const table = document.getElementById('todo-container__table-body');
    addRowToTable(table, { product: product.value, count: parseInt(count.value) });
    product.value = '';
    count.value = '';
    addEventListener();
});
const updateTableRow = (productName, productCount) => {
    const updateButton = document.getElementById('todo-container__update');
    const submitButton = document.getElementById('todo-container__submit');
    const product = document.getElementById('todo-container__product');
    const count = document.getElementById('todo-container__count');
    updateButton.addEventListener('click', (event) => {
        event.preventDefault();
        productName.innerText = product.value;
        productCount.innerText = count.value;
        updateButton.style.display = 'none';
        submitButton.style.display = 'block';
        product.value = '';
        count.value = '';
    });
};
/**
 * Adds event listeners to delete buttons in the todo list.
 */
const addEventListener = () => {
    const deleteButtons = document.querySelectorAll('.todo-container__delete');
    const editButtons = document.querySelectorAll('.todo-container__edit');
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
    editButtons.forEach((element) => {
        const button = element;
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const row = event.target.closest('tr');
            let productName = row === null || row === void 0 ? void 0 : row.querySelector('.product-name');
            let productCount = row === null || row === void 0 ? void 0 : row.querySelector('.product-count');
            const productNameInput = document.getElementById('todo-container__product');
            const productCountInput = document.getElementById('todo-container__count');
            const updateButton = document.getElementById('todo-container__update');
            const submitButton = document.getElementById('todo-container__submit');
            productNameInput.value = productName.innerText;
            productCountInput.value = productCount.innerText;
            updateButton.style.display = 'block';
            submitButton.style.display = 'none';
            updateTableRow(productName, productCount);
        });
    });
};
export {};
