const should = require('should');
const cp = require('child_process');
const randimals = require('../dist/index');

describe('randimals', function () {
  describe('library', () => {
    it('should return a string with 2 words', () => {
      const s = randimals();
      s.should.be.instanceOf(String);
      s.split(' ').length.should.eql(2);
    });

    it('should return a string with 5 words', () => {
      const s = randimals(4);
      s.should.be.instanceOf(String);
      s.split(' ').length.should.eql(5);
    });

    it('should return a string with 3 adjectives', () => {
      const s = randimals({
        adjectives: 3,
      });
      s.should.be.instanceOf(String);
      s.split(' ').length.should.eql(4);
    });

    it('should return a string with 2 animals', () => {
      const s = randimals({
        animals: 2,
      });
      s.should.be.instanceOf(String);
      s.split(' ').length.should.eql(3);
    });

    it('should return a string with a different format', () => {
      const s = randimals({
        format: 'path',
      });
      s.should.be.instanceOf(String);
      s.split('/').length.should.eql(2);
    });

    it('should return a string with a different case', () => {
      const s = randimals({
        case: 'upper',
      });
      s.should.be.instanceOf(String);
      s.should.eql(s.toUpperCase());
    });

    it('should return a string with a different separator', () => {
      const s = randimals({
        separator: '-',
      });
      s.should.be.instanceOf(String);
      s.split('-').length.should.eql(2);
    });
  });

  describe('cli', () => {
    const cli = (options) => {
      const res = cp.execSync('./bin/cli.js ' + options).toString();
      return res.trim();
    };

    it('should return a string with 2 words', () => {
      const s = cli('');
      s.should.be.instanceOf(String);
      s.split(' ').length.should.eql(2);
    });

    it('should return a string with 3 adjectives', () => {
      const s = cli('--adjectives 3');
      s.should.be.instanceOf(String);
      s.split(' ').length.should.eql(4);
    });

    it('should return a string with 2 animals', () => {
      const s = cli('--animals 2');
      s.should.be.instanceOf(String);
      s.split(' ').length.should.eql(3);
    });

    it('should return a string with a different format', () => {
      const s = cli('--format path');
      s.should.be.instanceOf(String);
      s.split('/').length.should.eql(2);
    });

    it('should return a string with a different case', () => {
      const s = cli('--case upper');
      s.should.be.instanceOf(String);
      s.should.eql(s.toUpperCase());
    });

    it('should return a string with a different separator', () => {
      const s = cli('--separator -');
      s.should.be.instanceOf(String);
      s.split('-').length.should.eql(2);
    });
  });
});
