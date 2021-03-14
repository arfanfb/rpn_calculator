const { Given, Then } = require('@cucumber/cucumber');
const { sum } = require('../src/calculator');
const assert = require('assert');

Given('user input {string}', function(input) {
  let numberArr = input.replace('/ /','').split('+')

  this.result = sum(Number(numberArr[0]),Number(numberArr[1]));
});

Then('system return {string}', function(expected) {
  assert.equal(this.result, expected);
});