// load data and map it
const adjSrc = require('../data/adjectives');
const aniSrc = require('../data/animals');

const adjectives = adjSrc.map((word: string) => word.toLowerCase());
const animals = aniSrc.map((word: string) => word.toLowerCase());

export { adjectives, animals };
