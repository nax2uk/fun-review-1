// returns [ ["name", "Sam"] ]
//deeplyEntries({ name: 'Sam' });
//deepEntries({ name: 'Sam', favBook: 'Blood Meridian' });
// returns [ ["name", "Sam"], ["favBook", "Blood Meridian"] ]

const deepEntries = (obj) => {
  let arrOfArrKeyValues = [];
  for (let key in obj)
    if (typeof obj[key] === 'object') arrOfArrKeyValues.push([key, deepEntries(obj[key])]);
    else arrOfArrKeyValues.push([key, obj[key]]);

  return arrOfArrKeyValues;
};

const deeplyEquals = (itemA, itemB) => {
  let typeOfItemA = typeof itemA;
  let typeOfItemB = typeof itemB;
  let isDeeplyEquals = false;

  //first check that the type of both items are the same, else return false;
  if (!(typeOfItemA === typeOfItemB)) return false;
  // if BOTH ITEMS have the SAME TYPES. check if they have the same values
  else {
    switch (typeOfItemA) {
      case 'string':
        return itemA === itemB;
        break;
      case 'number':
        return itemA === itemB;
        break;
      case 'object': //object can be an array or object
        for (let keyA in itemA) {
          isDeeplyEquals = deeplyEquals(itemA[keyA], itemB[keyA]);
          if (isDeeplyEquals === false) return false;
        }
        break;
    }
  }
  return isDeeplyEquals;
};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };
