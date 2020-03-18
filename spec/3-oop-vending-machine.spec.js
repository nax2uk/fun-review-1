const { expect } = require('chai');
const { VendingMachine } = require('../challenges/3-oop-vending-machine');
const { spy } = require('sinon');

describe('VendingMachine', () => {
  it('returns an object', () => {
    const testMachine = new VendingMachine();
    expect(testMachine).to.be.an('object');
  });
  it('returns vending machine with credit property initalised to 0', () => {
    const testMachine = new VendingMachine();
    expect(testMachine.credit).to.equal(0);
  });
  it('returns vending machine with stock property initalised to {A:{},B:{},C:{}}', () => {
    const testMachine = new VendingMachine();
    expect(testMachine.stock).to.eql({ A: {}, B: {}, C: {} });
  });
  describe('---addStock', () => {
    it('returns vending machine with an addStock method', () => {
      const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      expect(testMachine.addStock).to.be.a('function');
    });
    it('updates stock in vending machine', () => {
      const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addStock(marsBars, 'A');
      expect(testMachine.stock).to.eql({
        A: { name: 'marsBar', price: 50, quantity: 6 },
        B: {},
        C: {},
      });

      const fruitella = { name: 'fruitella', price: 50, quantity: 6 };
      testMachine.addStock(fruitella, 'B');
      expect(testMachine.stock).to.eql({
        A: { name: 'marsBar', price: 50, quantity: 6 },
        B: { name: 'fruitella', price: 50, quantity: 6 },
        C: {},
      });
    });
  });
  describe('---addCredit', () => {
    it('returns vending machine with an addCredit method', () => {
      const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addCredit(50);
      expect(testMachine.addCredit).to.be.a('function');
    });
    it('updates credit in vending machine', () => {
      const testMachine = new VendingMachine();
      testMachine.addCredit(50);
      expect(testMachine.credit).to.equal(50);
    });
    it('increases credit in vending machine', () => {
      const testMachine = new VendingMachine();
      testMachine.addCredit(50);
      testMachine.addCredit(50);
      expect(testMachine.credit).to.equal(100);
    });
  });
  describe('---purchaseItem', () => {
    it('returns vending machine with an purchaseItem method', () => {
      const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addStock(marsBars, 'A');
      testMachine.addCredit(30);
      testMachine.purchaseItem('A');
      expect(testMachine.purchaseItem).to.be.a('function');
    });
    it('decreases the amount of stock if item purchased', () => {
      const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addStock(marsBars, 'A');

      testMachine.addCredit(80);
      testMachine.purchaseItem('A');
      expect(testMachine.stock['A'].quantity).to.equal(5);
    });
    it('does not decrease the amount of stock if item purchased', () => {
      const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addStock(marsBars, 'A');

      testMachine.addCredit(30);
      testMachine.purchaseItem('A');
      expect(testMachine.stock['A'].quantity).to.equal(6);
    });
    it('decreases the amount of credit if item purchased', () => {
      const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addStock(marsBars, 'A');

      testMachine.addCredit(80);
      testMachine.purchaseItem('A');
      expect(testMachine.credit).to.equal(30);
      testMachine.addCredit(5);
      expect(testMachine.credit).to.equal(35);
    });
    it('console log insufficient funds if credit is less than price of item', () => {
      spy(console, 'log');

      const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addStock(marsBars, 'A');

      testMachine.addCredit(30);
      testMachine.purchaseItem('A');
      expect(console.log.args[0].toString()).to.equal('Insufficent credit!');
    });
    it('console logs item if credit is more than price of item', () => {
      console.log.restore();
      spy(console, 'log');
      const marsBars = { name: 'marsBar', price: 20, quantity: 6 };
      const testMachine = new VendingMachine();
      testMachine.addStock(marsBars, 'A');

      testMachine.addCredit(30);
      testMachine.purchaseItem('A');
      expect(console.log.args[0].toString()).to.equal('marsBar');
    });
  });
});
