import { Counter } from './../src/counter.js';

describe('Counter', () => {

  test('should return error message if argument is not a number', () => {
    const counter = Counter("hello");
    expect(counter).toBe("invalid input");
  });

  // test('should return error message if arguments are not a number with 0-2 decimal places', () => {
  //   var counter = Counter(5.987)
  // });
});