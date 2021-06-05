#!/usr/bin/env node

const command = require('commander')
const randimals = require('../dist/index.js');

command
  .version(randimals.version)
  .option('-a, --adjectives <number>', 'set the number of adjectives to output', 1)
  .option('-n, --animals <number>', 'set the number of animals to output', 1)
  .option('-s, --separator <string>', 'set the separator string between each adjective and noun', ' ')
  .parse(process.argv);

const options = command.opts();

console.log(randimals({
  adjectives: options.adjectives,
  animals: options.animals,
  separator: options.separator
}));
