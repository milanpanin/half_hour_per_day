import { ProductInfo } from "./interfaces/productInfo";

const addRowToTable = (table: HTMLTableElement, productInfo: ProductInfo) => {
  const row = `
    <tr>
      <td>${productInfo.product}</td>
      <td>${productInfo.count}</td>
    </tr>
  `;

  table.innerHTML += row;
};

document.getElementById('todo-container__submit')!.addEventListener('click', (event) => {
  event.preventDefault();

  // TODO: Validacija unetih podataka
  const product = document.getElementById('todo-container__product') as HTMLInputElement;
  const count = document.getElementById('todo-container__count') as HTMLInputElement;
  const table = document.getElementById('todo-container__table-body') as HTMLTableElement;

  addRowToTable(table, { product: product.value, count: parseInt(count.value) });
});