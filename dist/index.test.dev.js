"use strict";

var sum = require('./sum');

var res = require('./res');

var reverse = require('./reverse'); //тестирование сложения


test('adds 1 + 2 to equal 3', function () {
  expect(sum(1, 2)).toBe(3);
}); //тестирование умножения

test("2 * 2 = 4", function () {
  expect(res(2)).toBe(4);
}); //тестирование переворачивания строки

test('reverse', function () {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});