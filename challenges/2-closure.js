const invert = (func) => {
  function invertArgs(...args) {
    let output = func(...args);
    if (typeof output === 'boolean') {
      return !output;
    } else {
      return output;
    }
  }
  return invertArgs;
};

const flip = (func) => {
  function flipArgs(...args) {
    //copy elements into a new array before calling reverse which will mutate the original args array
    let newArgs = [...args];
    return func(...newArgs.reverse());
  }
  return flipArgs;
};

const rememberMe = () => {};

module.exports = { invert, flip, rememberMe };
