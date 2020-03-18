const invert = (func) => {
  function invertArgs(...args) {
    //console.log(args);
    let output = func(...args);
    if (typeof output === 'boolean') {
      return !output;
    } else {
      return output;
    }
    // return output;
    //for (let i = 0; i < args.length; i++) if (typeof args[i] === boolean) arr = func(a);
  }
  return invertArgs;
};

const flip = () => {};

const rememberMe = () => {};

module.exports = { invert, flip, rememberMe };

/*.once = func => {
  let hasItBeenCalled = false;
  let output;

  function runFunction(...args) {
    if (!hasItBeenCalled) {
      hasItBeenCalled = true;
      output = func(...args);
    }
    return output;
  }
  return runFunction;
};*/
