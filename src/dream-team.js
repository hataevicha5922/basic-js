const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(arr) {
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === 'string' &&
      arr[i][0] === arr[i][0].toUpperCase() &&
      arr[i].length !== 0
    ) {
      res = res + arr[i][0];
    } else if (typeof arr[i] !== 'string') {
      return false;
    } else if (arr[i][0] === ' ' && arr[i][1] === arr[i][1].toUpperCase()) {
      res = res + arr[i][1];
    }
  }
  return res.split('').sort().join('');
};
