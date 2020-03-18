class VendingMachine {
  constructor() {
    this.credit = 0;
    this.stock = { A: {}, B: {}, C: {} };
  }
  addStock(objItem, row) {
    this.stock[row] = objItem;
  }

  addCredit(credit) {
    this.credit += credit;
  }
  purchaseItem(row) {
    if (this.credit > this.stock[row].price) {
      console.log(this.stock[row].name);
      this.stock[row].quantity--;
      this.credit -= this.stock[row].price;
    } else console.log('Insufficent credit!');
  }
}

module.exports = { VendingMachine };
