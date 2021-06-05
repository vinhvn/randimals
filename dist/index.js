/**
 * Generate a unique animal with a random adjective
 * @param params  {Object} params
 *                An optional configuration object
 *                - adjectives: Number of adjectives (default 1)
 *                - animals: Number of animals (default 1)
 *                - separator: Adjective and noun separator (default none)
 */
module.exports = function (params) {
    var adjectives = require('../data/adjectives.json');
    var animals = require('../data/animals.json');
    params = params || {};
    params.adjectives = params.adjectives || 1;
    params.animals = params.animals || 1;
    params.separator = params.separator || '';
    var words = [];
    for (var i = 0; i < params.adjectives; i++) {
        words.push(capitalize(random(adjectives)));
    }
    for (var i = 0; i < params.animals; i++) {
        words.push(capitalize(random(animals)));
    }
    return words.join(params.separator);
};
function random(words) {
    return words[Math.floor(Math.random() * words.length)];
}
function capitalize(word) {
    return "" + word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}
