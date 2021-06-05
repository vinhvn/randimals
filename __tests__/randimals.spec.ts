const randimals = require('../dist/index.js');

describe('randimals', () => {
  it('should return a string with two words', () => {
    const s = randimals({ separator: ' ' });
    expect(typeof s).toBe('string');
    expect(s.split(' ')).toHaveLength(2);
  });
});
