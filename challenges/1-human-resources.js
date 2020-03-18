function removeAgents(arrOfObjEmployees) {
  return arrOfObjEmployees.filter((objEmployees) => !(objEmployees.profession === 'mole'));
}

// 2

function makeNameTags(arrOfObjGuests) {
  return arrOfObjGuests.map(
    (objGuest) => `${objGuest.title} ${objGuest.forename} ${objGuest.surname}, ${objGuest.company}`
  );
}

// 3

function createPoll(items) {}

module.exports = { removeAgents, makeNameTags };
