document.getElementById('todo-container__submit')!.addEventListener('click', (event) => {
  event.preventDefault();

  // TODO: Validacija unetih podataka
  const product = document.getElementById('todo-container__product') as HTMLInputElement;
  const count = document.getElementById('todo-container__count') as HTMLInputElement;

  console.log(product.value, count.value);
});