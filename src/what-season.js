const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(/* date */) {
  month = document.forms.date.month.value.toLowerCase() + ',';
  winter = 'dec,december,jan,january,feb,february,12,1,2,';
  spring = 'mar,march,apr,april,may,3,4,5,';
  summer = 'jun,june,jul,july,aug,august,6,7,8,';
  fall = 'sep,september,oct,october,nov,november,9,10,11,';
  season = 'unknown';
  if (winter.indexOf(month) != -1) {
    season = 'winter';
  } else if (spring.indexOf(month) != -1) {
    season = 'spring';
  } else if (summer.indexOf(month) != -1) {
    season = 'summer';
  } else if (fall.indexOf(month) != -1) {
    season = 'fall';
  }
  return season;
};
