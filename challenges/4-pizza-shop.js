const { preparePizza, cookPizza, boxPizza } = require('../utils/challenge4-utils.js');

function makePizza(strPizzaOrder, cb) {
  if (strPizzaOrder.length === 0) cb(null, strPizzaOrder);

  preparePizza(strPizzaOrder, (err, strRawPizza) => {
    if (err) cb(err);
    else {
      console.log(strRawPizza);
      cookPizza(strRawPizza, (err, strCookedPizza) => {
        if (err) cb(err);
        else {
          console.log(strCookedPizza);
          boxPizza(strCookedPizza, (err, strBoxedPizza) => {
            if (err) cb(err);
            else {
              console.log(strBoxedPizza);
              cb(null, strBoxedPizza);
            }
          });
        }
      });
    }
  });
}

module.exports = makePizza;
