const randimals = require('../dist/index.js');
const cp = require('child_process');

describe('randimals', () => {
  describe('api', () => {
    it('should return a string with 2 words', () => {
      const s = randimals();
      expect(typeof s).toBe('string');
      expect(s.split(' ')).toHaveLength(2);
    });

    it('should return a string with 5 words', () => {
      const s = randimals(4);
      expect(typeof s).toBe('string');
      expect(s.split(' ')).toHaveLength(5);
    });

    it('should return a string with 3 adjectives', () => {
      const s = randimals({
        adjectives: 3,
      });
      expect(typeof s).toBe('string');
      expect(s.split(' ')).toHaveLength(4);
    });

    it('should return a string with 2 animals', () => {
      const s = randimals({
        animals: 2,
      });
      expect(typeof s).toBe('string');
      expect(s.split(' ')).toHaveLength(3);
    });

    it('should return a string with a different separator', () => {
      const s = randimals({
        separator: '-',
      });
      expect(typeof s).toBe('string');
      expect(s.split('-')).toHaveLength(2);
    });
  });

  describe('cli', () => {
    const cli = (options) => {
      const res = cp.execSync('./bin/index.js ' + options).toString();
      return res.trim();
    };

    it('should return a string with 2 words', () => {
      const s = cli('');
      expect(typeof s).toBe('string');
      expect(s.split(' ')).toHaveLength(2);
    });

    it('should return a string with 3 adjectives', () => {
      const s = cli('--adjectives 3');
      expect(typeof s).toBe('string');
      expect(s.split(' ')).toHaveLength(4);
    });

    it('should return a string with 2 animals', () => {
      const s = cli('--animals 2');
      expect(typeof s).toBe('string');
      expect(s.split(' ')).toHaveLength(3);
    });

    it('should return a string with a different separator', () => {
      const s = cli('--separator "-"');
      expect(typeof s).toBe('string');
      expect(s.split('-')).toHaveLength(2);
    });
  });
});
