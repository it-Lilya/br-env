import demo from './app';

// eslint-disable-next-line no-undef
describe('Пример теста', () => {
  // eslint-disable-next-line no-undef
  test.each([
    { str: 'Hello!', expected: 'Demo: Hello!' },
    { str: '', expected: 'Demo: ' },
    { str: 100, expected: 'Demo: 100' },
  ])('demo($str)', ({ str, expected }) => {
    expected(demo(str)).toBe(expected);
  });
});
