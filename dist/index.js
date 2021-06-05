"use strict";
exports.__esModule = true;
/**
 * Generate a unique animal with a random adjective
 * @param options {Object} options
 *                An optional configuration object
 *                - adjectives: Number of adjectives (default 1)
 *                - animals: Number of animals (default 1)
 *                - separator: Adjective and noun separator (default none)
 */
function randimals(options) {
    var adjectives = require('../data/adjectives.json');
    var animals = require('../data/animals.json');
    // convert number to object
    if (typeof options === 'number') {
        options = { adjectives: options };
    }
    options = options || {};
    options.adjectives = options.adjectives || 1;
    options.animals = options.animals || 1;
    options.separator = options.separator || ' ';
    var words = [];
    for (var i = 0; i < options.adjectives; i++) {
        words.push(randimals.capitalize(randimals.random(adjectives)));
    }
    for (var i = 0; i < options.animals; i++) {
        words.push(randimals.capitalize(randimals.random(animals)));
    }
    return words.join(options.separator);
}
randimals.version = require('../package.json').version;
randimals.random = function random(words) {
    return words[Math.floor(Math.random() * words.length)];
};
randimals.capitalize = function capitalize(word) {
    return "" + word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
};
module.exports = randimals;
