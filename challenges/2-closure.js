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
    return func(...args.reverse());
  }
  return flipArgs;
};

const rememberMe = () => {};

module.exports = { invert, flip, rememberMe };
