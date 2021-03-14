const calculator = require('./calculator');

test('sum 1 + 2 = 3',  function() {
  expect(calculator.sum(1,2)).toBe(3);
});

test('sum 0.2 + 1.5 = 2.7', function() {
  expect(calculator.sum(1.2,1.5)).toBe(2.7);
});

test('minus 5 + 999 = 1004', function() {
  expect(calculator.minus(5, 999)).toBe(-994);
});

test('divide 9 / 2 = 4.5', function() {
  expect(calculator.divide(9,2)).toBe(4.5);
});

test('multiply 1 * 2 = 2', function() {
  expect(calculator.multiply(1,2)).toBe(2);
});

test('percent 68.7 = 0.687', function() {
  expect(calculator.percent(68.7)).toBe(0.687);
});

test('pow 2 ^ 4 = 16', function() {
  expect(calculator.pow(2,4)).toBe(16);
});

test('pow 2 ^ 4 = 390625', function() {
  expect(calculator.powNeutral(2,4)).toBe(16);
});

test('pow 5 ^ 8 = 390625', function() {
  expect(calculator.pow(5,8)).toBe(390625);
});

test('pow 5 ^ 8 = 390625', function() {
  expect(calculator.powNeutral(5,8)).toBe(390625);
});

test('pow -2 ^ 2 = 4', function() {
  expect(calculator.pow(-2,2)).toBe(4);
});

test('pow -2 ^ 2 = 4', function() {
  expect(calculator.powNeutral(-2,2)).toBe(4);
});

test('pow -2 ^ 3 = -8', function() {
  expect(calculator.pow(-2,3)).toBe(-8);
});

test('pow -2 ^ 3 = -8', function() {
  expect(calculator.powNeutral(-2,3)).toBe(-8);
});

test('factorial 5! = 120', function() {
  expect(calculator.factorial(5)).toBe(120);
});

test('factorial -1! = -1', function() {
  expect(calculator.factorial(-1)).toBe(NaN);
});

test('RPN [1,2,3,sum,minus] = -4', function() {
  const arr = [1,2,3,calculator.sum, calculator.minus];

  expect(calculator.RPN(arr)).toBe(-4);
});

test('RPN [2,3,sum,3,minus,8,multiply,5,6,sum,min] = 5', function() {
  let arr = [2,3,calculator.sum,3,calculator.minus,8,calculator.multiply,5,6,calculator.sum,calculator.minus];
  
  expect(calculator.RPN(arr)).toBe(5);
});

test('RPN ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] = 22', function() {
  let arr = [10,6,9,3,calculator.sum,-11,calculator.multiply,calculator.divide,calculator.multiply
    ,17,calculator.sum,5,calculator.sum];

  expect(Math.round(calculator.RPN(arr))).toBe(22);
});

test('RPN [9,5,3,+,2,4,^,-,+] = 1', function() {
  let arr = [9,5,3,calculator.sum,2,4,calculator.pow,calculator.minus,calculator.sum];

  expect(Math.round(calculator.RPN(arr))).toBe(1);
});

test('Calc string: 9,5,3,+,2,4,^,-,+,0.5,+ = 1.5', function() {
  expect(calculator.calc('9,5,3,+,2,4,^,-,+,0.5,+')).toBe(1.5);
});

test('RPN 9,5,3,+,2,4,^,-,+,4,+,2,^ = 25', function() {
  expect(calculator.calc('9,5,3,+,2,4,^,-,+,4,+,2,^')).toBe(25);
});

test('RPN 9,5,3,+,2,4,^,-,+,4,+,! = 120', function() {
  expect(calculator.calc('9,5,3,+,2,4,^,-,+,4,+,!')).toBe(120);
});

test('RPN 2,3,!,+,2,* = 16', function() {
  expect(calculator.calc('2,3,!,+,2,*')).toBe(16);
});

test('RPN 2 3 * 5 6 + - = -5', function() {
  expect(calculator.calc('2,3,*,5,6,+,-')).toBe(-5);
});

test('RPN 2,3,!,+ = 8', function() {
  expect(calculator.calc('2,3,!,+')).toBe(8);
});

test('RPN 24,2,2,!,*,/ = 6', function() {
  expect(calculator.calc('24,2,2,!,*,/')).toBe(6);
});

test('RPN 50,2,!,*,% = 1', function() {
  expect(calculator.calc('50,2,!,*,%')).toBe(1);
});

test('RPN Arr [2,3,!,+ ] = 8', function() {
  expect(calculator.calc([2,3,calculator.factorial,calculator.sum])).toBe(8);
});

test('RPN 3,!,*,% = error input count', function() {
  expect(calculator.calc('3,!,*,%')).toBe('error input count');
});

test('RPN !,*,% = error input count', function() {
  expect(calculator.calc('!,*,%')).toBe('error input count');
});

test('RPN 2,3,*,5,6,+,-,4 = Missing one operator', function() {
  expect(calculator.calc('2,3,*,5,6,+,-,4')).toBe('Missing one operator');
});
