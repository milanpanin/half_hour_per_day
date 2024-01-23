import { ProductInfo } from "./interfaces/productInfo";

/**
 * Adds a new row to the table with the provided product information.
 * @param table - The HTML table element to add the row to.
 * @param productInfo - The information of the product to be displayed in the row.
 */
const addRowToTable = (table: HTMLTableElement, productInfo: ProductInfo) => {
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

document.getElementById('todo-container__submit')!.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();

  // TODO: Validacija unetih podataka
  const product = document.getElementById('todo-container__product') as HTMLInputElement;
  const count = document.getElementById('todo-container__count') as HTMLInputElement;
  const table = document.getElementById('todo-container__table-body') as HTMLTableElement;

  addRowToTable(table, { product: product.value, count: parseInt(count.value) });
  addEventListener();
});

/**
 * Adds event listeners to delete buttons in the todo list.
 */
const addEventListener = () => {
  const deleteButtons = document.querySelectorAll('.todo-container__delete');
  
  deleteButtons.forEach((element: Element) => {
    const button = element as HTMLElement;
    button.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      const row = (event.target as HTMLElement).closest('tr');
      if (row) {
        row.remove();
      }
    });
  });
}
