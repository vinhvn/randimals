#!/usr/bin/env node

import { Command } from 'commander';

const randimals = require('../dist/index.js');
const program = new Command();

// set version and options
program
  .version(require('../package.json').version)
  .option(
    '-a, --adjectives <number>',
    'set the number of adjectives to output',
    '1'
  )
  .option('-n, --animals <number>', 'set the number of animals to output', '1')
  .option(
    '-f, --format <string>',
    `set the naming convention for each word (ex: 'pascal', 'snake', 'capital', etc.)`,
    'capital'
  )
  .option(
    '-c, --case <string>',
    `set the case for each word (ex: 'lower', 'upper', 'capital')`
  )
  .option(
    '-s, --separator <string>',
    'set the separator string between each adjective and noun'
  )
  .parse(process.argv);

// get input options
const options = program.opts();

// run program
randimals({
  adjectives: options.adjectives,
  animals: options.animals,
  format: options.format,
  case: options.case,
  separator: options.separator,
}).then((res: string) => console.log(res));
