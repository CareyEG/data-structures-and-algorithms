function getRemainder(n, m) {
  return n % m;
}


describe('modulo functionality', () => {
  test('test 4 mod 3 is 1', () => {
    const expected = 1;
    const actual = getRemainder(4,3);
    expected(actual).toBe(expected);
  });
});
