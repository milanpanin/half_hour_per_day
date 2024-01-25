import { ProductInfo } from "./interfaces/productInfo";

/**
 * Adds a new row to the table with the provided product information.
 * @param table - The HTML table element to add the row to.
 * @param productInfo - The information of the product to be displayed in the row.
 */
const addRowToTable = (table: HTMLTableElement, productInfo: ProductInfo) => {
  const row = `
    <tr>
      <td class='product-name'>${productInfo.product}</td>
      <td class='product-count'>${productInfo.count}</td>
      <td><span class="todo-container__delete">💀</span> <span class="todo-container__edit">🤢</span></td>
    </tr>
  `;

  table.innerHTML += row;
};

document.getElementById('todo-container__submit')!.addEventListener('click', (event: MouseEvent) => {
  event.preventDefault();

  const product = document.getElementById('todo-container__product') as HTMLInputElement;
  const count = document.getElementById('todo-container__count') as HTMLInputElement;
  const table = document.getElementById('todo-container__table-body') as HTMLTableElement;

  addRowToTable(table, { product: product.value, count: parseInt(count.value) });
  product.value = '';
  count.value = '';
  addEventListener();
});

const updateTableRow = (productName: HTMLElement, productCount: HTMLElement) => {
  const updateButton = document.getElementById('todo-container__update') as HTMLInputElement;
  const submitButton = document.getElementById('todo-container__submit') as HTMLInputElement;
  const product = document.getElementById('todo-container__product') as HTMLInputElement;
  const count = document.getElementById('todo-container__count') as HTMLInputElement;

  updateButton.addEventListener('click', (event: MouseEvent) => {
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

  editButtons.forEach((element: Element) => {
    const button = element as HTMLElement;

    button.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      const row = (event.target as HTMLElement).closest('tr');
      let productName = row?.querySelector('.product-name') as HTMLElement;
      let productCount = row?.querySelector('.product-count') as HTMLElement;
      const productNameInput = document.getElementById('todo-container__product') as HTMLInputElement;
      const productCountInput = document.getElementById('todo-container__count') as HTMLInputElement;
      const updateButton = document.getElementById('todo-container__update') as HTMLInputElement;
      const submitButton = document.getElementById('todo-container__submit') as HTMLInputElement;

      productNameInput.value = productName.innerText;
      productCountInput.value = productCount.innerText;
      updateButton.style.display = 'block';
      submitButton.style.display = 'none';

      updateTableRow(productName, productCount);
    }); 
  });
};
