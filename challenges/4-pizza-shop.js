const { preparePizza, cookPizza, boxPizza } = require('../utils/challenge4-utils.js');

function makePizza(strPizzaOrder, cb) {
  if (strPizzaOrder.length === 0) cb(null, strPizzaOrder);
  else {
    preparePizza(strPizzaOrder, (err, strRawPizza) => {
      if (err) cb(err);
      else {
        cookPizza(strRawPizza, (err, strCookedPizza) => {
          if (err) cb(err);
          else {
            boxPizza(strCookedPizza, (err, strBoxedPizza) => {
              if (err) cb(err);
              else {
                cb(null, strBoxedPizza);
              }
            });
          }
        });
      }
    });
  }
}

module.exports = makePizza;
