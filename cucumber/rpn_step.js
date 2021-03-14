const { Given, Then } = require('@cucumber/cucumber');
const { calc } = require('../src/calculator');
const assert = require('assert');

Given('user input rpn string {string}', function(input) {
  this.resultRPN = calc(input);
});

Then('system return rpn result {string}', function(expected) {
  assert.equal(this.resultRPN, expected);
})