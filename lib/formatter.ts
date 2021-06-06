import {
  camelCase as camel,
  capitalCase as capital,
  constantCase as constant,
  dotCase as dot,
  headerCase as header,
  noCase as no,
  paramCase as param,
  pascalCase as pascal,
  pathCase as path,
  sentenceCase as sentence,
  snakeCase as snake,
} from 'change-case';

import type { Format, Case } from './types';

const formatters: Record<Format, Function> = {
  camel,
  capital,
  constant,
  dot,
  header,
  no,
  param,
  pascal,
  path,
  sentence,
  snake,
};

/**
 * Converts a given string to a specific format such as pascal case
 * @param format  {String} name of format (ex: 'pascal')
 * @param str     {String} input string
 * @returns       {String} formatted string
 */
const formatString = (format: Format, str: string): string => {
  return formatters[format](str);
};

/**
 * Converts a given word to a specific case such as uppercase
 * @param format  {String} name of format ('lower', 'upper', or 'capital)
 * @param word    {String} input word
 * @returns       {String} formatted word
 */
const formatWord = (format: Case, word: string): string => {
  if (format === 'capital') {
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
  } else if (format === 'lower') {
    return word.toLowerCase();
  } else if (format === 'upper') {
    return word.toUpperCase();
  } else {
    throw new Error(
      `Bad format given. Valid options are 'capital', 'lower', 'upper'.`
    );
  }
};

export { formatString, formatWord };
