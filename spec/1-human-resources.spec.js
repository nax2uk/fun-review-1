const { expect } = require('chai');
const { removeAgents } = require('../challenges/1-human-resources.js');

describe('#removeAgents', () => {
  it('checks that function returns an array', () => {
    const inputArray = [{ name: 'Sam', profession: 'artist' }];
    expect(removeAgents(inputArray)).to.be.an('array');
  });

  it('checks that function returns an empty array when passed an empty array', () => {
    const inputArray = [];
    expect(removeAgents(inputArray)).to.eql([]);
  });
  it('checks that function returns a new array', () => {
    const inputArray = [{ name: 'Sam', profession: 'artist' }];
    expect(removeAgents(inputArray)).to.not.equal(inputArray);
  });

  it('checks that function returns the value of the same array if no moles', () => {
    let inputArray = [{ name: 'Sam', profession: 'artist' }];
    expect(removeAgents(inputArray)).to.eql([{ name: 'Sam', profession: 'artist' }]);

    inputArray = [
      { name: 'Sam', profession: 'artist' },
      { name: 'Mitch', profession: 'chauffeur' },
    ];
    expect(removeAgents(inputArray)).to.eql([
      { name: 'Sam', profession: 'artist' },
      { name: 'Mitch', profession: 'chauffeur' },
    ]);
  });
  it('checks that function returns the value of the array without the moles', () => {
    let inputArray = [
      { name: 'Sam', profession: 'artist' },
      { name: 'Mitch', profession: 'mole' },
    ];
    expect(removeAgents(inputArray)).to.eql([{ name: 'Sam', profession: 'artist' }]);
    inputArray = [
      { name: 'Sam', profession: 'artist' },
      { name: 'Mitch', profession: 'mole' },
      { name: 'Peter', profession: 'mole' },
      { name: 'Angela', profession: 'mole' },
      { name: 'Daisy', profession: 'mole' },
    ];
    expect(removeAgents(inputArray)).to.eql([{ name: 'Sam', profession: 'artist' }]);
    inputArray = [
      { name: 'Sam', profession: 'mole' },
      { name: 'Mitch', profession: 'mole' },
      { name: 'Peter', profession: 'mole' },
      { name: 'Angela', profession: 'mole' },
      { name: 'Daisy', profession: 'mole' },
    ];
    expect(removeAgents(inputArray)).to.eql([]);
  });
});
