module.exports = function toReadable (number) {
    const un = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tys = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number === 0) {
      return 'zero';
    } else if (number >= 1 && number <= 9) {
      return un[number];
    } else if (number >= 10 && number <= 19) {
      return teens[number - 10];
    } else if (number >= 20 && number <= 99) {
      if (number % 10 === 0) {
        return tys[Math.trunc(number / 10)];
      } else {
        return tys[Math.trunc(number / 10)] + ' ' + un[number % 10];
      }
    } else if (number >= 100 && number <= 999) {
      if (number % 100 === 0) {
        return un[Math.trunc(number / 100)] + ' hundred';
    } else if (number % 10 === 0 && (number/10)%10 === 1) {
        return un[Math.trunc(number / 100)] + ' hundred ' + teens[(Math.trunc(number % 100)) - 10];
      } else if (number % 10 === 0) {
        return un[Math.trunc(number / 100)] + ' hundred ' + tys[((Math.trunc(number / 10)) % 10)];
      } else if (number % 100 < 10) {
        return un[Math.trunc(number / 100)] + ' hundred ' + un[number % 10];
      } else if ((number % 100) >= 10 && (number % 100) <= 19) {
        return un[Math.trunc(number / 100)] + ' hundred ' + teens[(Math.trunc(number % 100)) - 10];
      }  else {
        return un[Math.trunc(number / 100)] + ' hundred ' + tys[Math.trunc((number % 100) / 10)] + ' ' + un[number % 10];
      }
    }
  }