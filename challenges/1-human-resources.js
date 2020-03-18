function removeAgents(arrOfObjEmployees) {
  return arrOfObjEmployees.filter((objEmployees) => !(objEmployees.profession === 'mole'));
}

function makeNameTags(arrOfObjGuests) {
  return arrOfObjGuests.map(
    (objGuest) => `${objGuest.title} ${objGuest.forename} ${objGuest.surname}, ${objGuest.company}`
  );
}

function createPoll(arrOfStrItems) {
  const objCountItems = {};
  arrOfStrItems.forEach((strItem) => {
    if (objCountItems.hasOwnProperty(strItem)) objCountItems[strItem]++;
    else objCountItems[strItem] = 1;
  });
  return objCountItems;
}

module.exports = { removeAgents, makeNameTags, createPoll };
