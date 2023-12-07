export class Print {
  constructor(private content: string, private financeType: string) {
    this.content = content;
    this.financeType = financeType;
  }

  print() {
    const finance_profit_table = document.getElementById('finance_profit_table_body') as HTMLTableElement;
    const finance_spending_table = document.getElementById('finance_spending_table_body') as HTMLTableElement;
    const financeRow = document.createElement('tr');
    console.log(this.content);
    
    financeRow.innerHTML = `
      <td>${this.content}</td>
    `;

    if (this.financeType === 'profit') {
      finance_profit_table.appendChild(financeRow);
    } else {
      finance_spending_table.appendChild(financeRow); 
    }
  }
}