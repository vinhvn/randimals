import type { Params } from './types';

/**
 * Generate a unique animal with a random adjective
 * @param options {Object} options
 *                An optional configuration object
 *                - adjectives: Number of adjectives (default 1)
 *                - animals: Number of animals (default 1)
 *                - separator: Adjective and noun separator (default none)
 */
function randimals(options: Params): string {
  const adjectives = require('../data/adjectives.json');
  const animals = require('../data/animals.json');

  // convert number to object
  if (typeof options === 'number') {
    options = { adjectives: options };
  }

  options = options || {};
  options.adjectives = options.adjectives || 1;
  options.animals = options.animals || 1;
  options.separator = options.separator || ' ';

  const words = [];

  for (let i = 0; i < options.adjectives; i++) {
    words.push(randimals.capitalize(randimals.random(adjectives)));
  }

  for (let i = 0; i < options.animals; i++) {
    words.push(randimals.capitalize(randimals.random(animals)));
  }

  return words.join(options.separator);
}

randimals.version = require('../package.json').version;
randimals.random = function random(words: string[]): string {
  return words[Math.floor(Math.random() * words.length)];
};
randimals.capitalize = function capitalize(word: string): string {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
};

module.exports = randimals;
