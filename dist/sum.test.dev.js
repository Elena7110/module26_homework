"use strict";

var sum = require('./sum');

var res = require('./res');

test('adds 1 + 2 to equal 3', function () {
  expect(sum(1, 2)).toBe(3);
});
test("2 * 2 = 4", function () {
  expect(res(2)).toBe(4);
});