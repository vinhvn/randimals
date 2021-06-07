#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var randimals = require('../dist/index.js');
var program = new commander_1.Command();
// set version and options
program
    .version(require('../package.json').version)
    .option('-a, --adjectives <number>', 'set the number of adjectives to output', '1')
    .option('-n, --animals <number>', 'set the number of animals to output', '1')
    .option('-f, --format <string>', "set the naming convention for each word (ex: 'pascal', 'snake', 'capital', etc.)", 'capital')
    .option('-c, --case <string>', "set the case for each word (ex: 'lower', 'upper', 'capital')")
    .option('-s, --separator <string>', 'set the separator string between each adjective and noun')
    .parse(process.argv);
// get input options
var options = program.opts();
// run program
randimals({
    adjectives: options.adjectives,
    animals: options.animals,
    format: options.format,
    "case": options["case"],
    separator: options.separator
}).then(function (res) { return console.log(res); });
