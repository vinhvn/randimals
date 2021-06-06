import type { Params, Format, Case } from './types';

import { randomAdjective, randomAnimal } from './random';
import { formatString, formatWord } from './formatter';

/**
 * Generate an adorable and unique animal with a random adjective attached.
 * NOTE: Using the "case" or "separator" options overrides the "format" option.
 * @param params {Object} params
 *                An optional configuration object.
 *                - adjectives: Number of adjectives (default 1)
 *                - animals: Number of animals (default 1)
 *                - format: Naming convention to use for string (default "capital")
 *                - case: Naming convention to use for words (default "capitalized")
 *                - separator: Adjective and noun separator (default " ")
 */
module.exports = function (params: Params): string {
  // defaults
  const options: Params = {
    adjectives: 1,
    animals: 1,
    format: 'capital',
  };

  // check for inputs from user
  if (params) {
    // param number, generate that many adjectives
    if (typeof params === 'number') {
      options.adjectives = params;
      // param string, use it as a formatter option
    } else if (typeof params === 'string') {
      if (isFormat(params)) {
        options.format = params;
      } else {
        throw new Error(
          `Bad format given. Valid formats are 'camel', 'capital', 'constant', 'dot', 'header', 'no', 'param', 'pascal', 'path', 'sentence', and 'snake'.`
        );
      }

      // param object, retrieve options from its properties
    } else if (typeof params === 'object') {
      options.adjectives = params.adjectives || options.adjectives;
      options.animals = params.animals || options.animals;
      options.format = params.format || options.format;
      options.case = params.case || options.case;
      options.separator = params.separator || options.separator;
    } else {
      throw new Error(
        `Bad argument type. Valid arguments are of type 'number', 'string', or 'object'`
      );
    }
  }

  const words: string[] = [];
  for (let i = 0; i < options.adjectives; i++) {
    words.push(randomAdjective());
  }
  for (let i = 0; i < options.animals; i++) {
    words.push(randomAnimal());
  }

  // if options "case" or "separator" are supplied, those take priority over "format"
  if (options.case || options.separator) {
    if (options.case) {
      if (isCase(options.case)) {
        options.separator = options.separator || ' ';
        return words
          .map((word: string) => formatWord(options.case, word))
          .join(options.separator);
      } else {
        throw new Error(
          `Bad case given. Valid cases are 'lower', 'upper', and 'capital'.`
        );
      }
    } else {
      options.case = 'capital'; // default
      return words
        .map((word: string) => formatWord(options.case, word))
        .join(options.separator);
    }
  }

  // format the entire string and return it
  return formatString(options.format, words.join(' '));
};

// Credit to https://stackoverflow.com/questions/47573087/typescript-check-if-value-is-contained-in-type
function isFormat(str: string): str is Format {
  return [
    'camel',
    'capital',
    'constant',
    'dot',
    'header',
    'no',
    'param',
    'pascal',
    'path',
    'sentence',
    'snake',
  ].includes(str);
}
function isCase(str: string): str is Case {
  return ['lower', 'upper', 'capital'].includes(str);
}
