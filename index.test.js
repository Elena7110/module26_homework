const sum = require('./sum');
const res = require('./res');
const reverse = require('./reverse')

//тестирование сложения
test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

//тестирование умножения
test("2 * 2 = 4", () => {
	expect(res(2)).toBe(4);
});

//тестирование переворачивания строки
test('reverse', () => {
	expect(reverse('hello')).toEqual('olleh');
	expect(reverse('')).toEqual('');
});