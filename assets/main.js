"use strict";

const randimals = require("randimals");

/**
 * Generates a Randimal
 */
global.generate = function () {
  const adjectives = document.getElementById("optionAdjectives").value;
  const animals = document.getElementById("optionAnimals").value;
  const format = document.getElementById("optionFormat").value;
  const tcase = document.getElementById("optionCase").value;
  const separator = document.getElementById("optionSeparator").value;
  const response = randimals({
    adjectives: adjectives,
    animals: animals,
    format: format,
    case: tcase,
    separator: separator,
  });
  document.getElementById("output").innerText = response;
};
