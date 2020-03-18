const { expect } = require('chai');
const { removeAgents, makeNameTags } = require('../challenges/1-human-resources.js');

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

describe('#makeNameTags', () => {
  it('checks that function returns an array', () => {
    const inputArray = [
      {
        title: 'Mr',
        forename: 'Sam',
        surname: 'Caine',
        age: 30,
        company: 'Northcoders',
      },
    ];
    expect(makeNameTags(inputArray)).to.be.an('array');
  });

  it('checks that function returns an empty array when passed an empty array', () => {
    const inputArray = [];
    expect(makeNameTags(inputArray)).to.eql([]);
  });

  it('checks that function returns a new array', () => {
    const inputArray = [
      {
        title: 'Mr',
        forename: 'Sam',
        surname: 'Caine',
        age: 30,
        company: 'Northcoders',
      },
    ];
    expect(makeNameTags(inputArray)).to.not.equal(inputArray);
  });

  it('checks that function return the correctly formatted array', () => {
    inputArray = [
      {
        title: 'Mr',
        forename: 'Sam',
        surname: 'Caine',
        age: 30,
        company: 'Northcoders',
      },
    ];

    expect(makeNameTags(inputArray)).to.eql(['Mr Sam Caine, Northcoders']);

    inputArray = [
      {
        title: 'Mr',
        forename: 'Sam',
        surname: 'Caine',
        age: 30,
        company: 'Northcoders',
      },
      {
        title: 'Mr',
        forename: 'Beyazid',
        surname: 'Kocak',
        age: 12,
        company: 'MGS',
      },
      {
        title: 'Mrs',
        forename: 'Samantha',
        surname: 'Jones',
        age: 22,
        company: 'British Gas',
      },
    ];
    expect(makeNameTags(inputArray)).to.eql([
      'Mr Sam Caine, Northcoders',
      'Mr Beyazid Kocak, MGS',
      'Mrs Samantha Jones, British Gas',
    ]);
  });
});
