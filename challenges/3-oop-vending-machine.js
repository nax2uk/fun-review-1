class VendingMachine {
  constructor() {
    this.credit = 0;
    this.stock = { A: {}, B: {}, C: {} };
  }
  addStock(objItem, row) {
    this.stock[row] = objItem;
  }

  addCredit(credit) {
    this.credit = credit;
  }
  purchaseItem(row) {
    if (this.credit > this.stock[row].price) {
      console.log(this.stock[row].name);
      this.stock[row].quantity--;
    } else console.log('Insufficent credit!');
  }
  //testMachine.addStock(marsBars, 'A')
  /**
{ A: { name: 'marsBar', price: 50, quantity: 6 },
  B: {},
  C: {} }
**/

  //testMachine.addCredit(30);
  // addCredit();
  //testMachine.purchaseItem('A')
  // purchaseItem();
}

module.exports = { VendingMachine };
