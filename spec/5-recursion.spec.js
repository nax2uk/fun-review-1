const { expect } = require('chai');
const { deeplyEquals, flat, deepEntries } = require('../challenges/5-recursion');

describe('deepEntries', () => {
  it('returns an array when passed object', () => {
    expect(deepEntries({})).to.be.an('array');
  });
  it('returns correct array when passed in an object with no nested objects', () => {
    expect(deepEntries({ name: 'Sam' })).to.eql([['name', 'Sam']]);
    expect(deepEntries({ name: 'Sam', favBook: 'Blood Meridian' })).to.eql([
      ['name', 'Sam'],
      ['favBook', 'Blood Meridian'],
    ]);
  });
  it('returns correct array when passed in an object with a level 1 nested object', () => {
    const inputObj = { name: 'Sam', pets: { name: 'fido' } };
    const outputArr = [
      ['name', 'Sam'],
      ['pets', [['name', 'fido']]],
    ];
    const actualOutput = deepEntries(inputObj);
    expect(actualOutput).to.eql(outputArr);
  });
  it('returns correct array when passed in an object with a multi-level nested object', () => {
    const inputObj = {
      name: 'Sam',
      favBook: { title: 'Blood Meridian', author: { name: 'Cormac McCarthy' } },
    };
    const outputArr = [
      ['name', 'Sam'],
      [
        'favBook',
        [
          ['title', 'Blood Meridian'],
          ['author', [['name', 'Cormac McCarthy']]],
        ],
      ],
    ];

    const actualOutput = deepEntries(inputObj);
    expect(actualOutput).to.eql(outputArr);
  });
});

describe('deeplyEquals', () => {
  it('returns false if two items are of different types', () => {
    expect(deeplyEquals(2, 'abc')).to.equal(false);
    expect(deeplyEquals([2, 3], 'abc')).to.equal(false);
  });
  it('returns true if two strings are the same', () => {
    expect(deeplyEquals('abc', 'abc')).to.equal(true);
  });
  it('returns false if two strings are not the same', () => {
    expect(deeplyEquals('abc', 'abb')).to.equal(false);
  });
  it('returns true if two numbers are the same', () => {
    expect(deeplyEquals(35, 35)).to.equal(true);
  });
  it('returns false if two numbers are the different', () => {
    expect(deeplyEquals(3, 35)).to.equal(false);
  }); //deeplyEquals([1, 2, { a: 'hello' }], [1, 2, { a: 'bye' }]);
  it('returns false if two arrays are different', () => {
    expect(deeplyEquals([1, 2, 3], [1, 2])).to.equal(false);
    expect(deeplyEquals([1, 2, 3], [1, 2])).to.equal(false);
  });
  it('returns true if two arrays are the same', () => {
    expect(deeplyEquals([1], [1])).to.equal(true);
    expect(deeplyEquals([1, 2], [1, 2])).to.equal(true);
    expect(deeplyEquals(['ab', 1], ['ab', 1])).to.equal(true);
  });
  it('works for deeply nested arrays', () => {
    expect(deeplyEquals([1, [2]], [1, [2]])).to.equal(true);
    expect(deeplyEquals([1, [3]], [1, [2]])).to.equal(false);
  });
  it('returns false if two objects are different', () => {
    expect(deeplyEquals({ a: 1 }, { a: 2 })).to.equal(false);
    expect(deeplyEquals({ a: 1, b: 'c', c: 'aff' }, { a: 1, b: 'c', c: 'fff' })).to.equal(false);
    expect(deeplyEquals({ a: 1, b: 'd', c: 'fff' }, { a: 1, b: 'c', c: 'fff' })).to.equal(false);
  });
  it('returns true if two objects are the same', () => {
    expect(deeplyEquals({ a: 1 }, { a: 1 })).to.equal(true);
    expect(deeplyEquals({ a: 1, b: 'c', c: 'aff' }, { a: 1, b: 'c', c: 'aff' })).to.equal(true);
  });
});
describe('flat', () => {});
