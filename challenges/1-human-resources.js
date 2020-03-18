// 1
//const employees = [{ name: 'Sam', profession: 'artist' }, { name: 'Mitch', profession: 'mole' }];
// returns [{name: 'Sam', profession: 'artist'}];

//removeAgents(employees);

function removeAgents(arrOfObjEmployees) {
  return arrOfObjEmployees.filter((objEmployees) => !(objEmployees.profession === 'mole'));
  //return [{ name: 'Sam', profession: 'artist' }];
}

// 2

function makeNameTags(guests) {}

// 3

function createPoll(items) {}

module.exports = { removeAgents };
