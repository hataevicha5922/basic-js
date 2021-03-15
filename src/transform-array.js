const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === '--discard-next' && arr[i + 1] === '--double-prev') {
      delete arr[i];
    } else if (
      arr[i - 1] === '--double-next' &&
      arr[i + 1] === '--double-prev'
    ) {
      arr[i - 1] === arr[i];
      arr[i + 1] === arr[i];
      res.push(arr[i - 1]);
      res.push(arr[i]);
      res.push(arr[i + 1]);
    } else if (
      arr[i - 1] === '--discard-next' &&
      arr[i + 1] === '--discard-next'
    ) {
      delete arr[i];
    } else if (
      arr[i - 1] === '--double-next' &&
      arr[i + 1] === '--discard-next'
    ) {
      arr[i] = arr[i];
    }
    res.push(arr[i]);
  }
  return res;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
