const divide = (a,b) => {
  return a / b;
}
const minus = (a,b) => {
  return a - b;
}
const multiply = (a, b) => {
  return a * b;
}
const sum = (a, b) => {
  return a + b;
}
const percent = (a) => {
  return a / 100;
}
const pow = (a,b) => {
  return Math.pow(a,b);
}
const powNeutral = (a,b) => {
  const arr = new Array(b);
  let result = a;
  
  for (let index = 0; index < arr.length - 1; index++) {
    result = result * a; 
  }
  
  return result;
}
const factorial = (a) => {
  if (a < 0)
    return NaN;
  else if (a === 0)
    return 1;
  else {
    return (a * factorial(a -1))
  }
}
const RPN = (arr) => {
  arr.forEach(function(item, index) {
    if (typeof item === 'function') {
      let arrNumber;
      let arrClone = arr;
      
      if (item.length === 2) {
        arrNumber = arrClone.splice(index - 2, 2);

        arr[index - 2] = item(arrNumber[0],arrNumber[1]);
      } else {
        arrNumber = arrClone.splice(index - 1, 2);
        arr.splice(index - 1, 0, item(arrNumber[0]));
      }
      RPN(arr);
    }
  });

  return arr.length === 1 ? arr[0] : 'Missing one operator';
}
const calc = (input) => {
  if (typeof input === 'string') {
    input = input.split(',');
  }

  let inputClone = input;
  let number = [];
  let binary = false;

  input.forEach((item,index) => {
    if (typeof item !== 'function') {
      switch(item) {
        case '+':
          inputClone[index] = sum;
          binary = true;
          break;
        case '-':
          inputClone[index] = minus;
          binary = true;
          break;
        case '*':
          inputClone[index] = multiply;
          binary = true;
          break;
        case '/':
          inputClone[index] = divide;
          binary = true;
          break;
        case '^':
          inputClone[index] = pow;
          binary = true;
          break;
        case '!':
          inputClone[index] = factorial;
          break;
        case '%':
          inputClone[index] = percent;
          break;
        default:
          inputClone[index] = Number(item);
          number.push(Number(item));
          break;
      }
    }
  });

  if (binary === true && number.length < 2 || binary === false && number.length < 1) {
    return 'error input count';
  }
  return RPN(inputClone);
}

module.exports = {
  calc,
  divide,
  factorial,
  minus,
  multiply,
  percent,
  pow,
  powNeutral,
  RPN,
  sum,
};