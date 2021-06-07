export declare type Format = 'camel' | 'capital' | 'constant' | 'dot' | 'header' | 'no' | 'param' | 'pascal' | 'path' | 'sentence' | 'snake';
export declare type Case = 'lower' | 'upper' | 'capital';
interface Options {
    adjectives?: number;
    animals?: number;
    format?: Format;
    case?: Case;
    separator?: string;
}
export declare type Params = number | string | Options | undefined;
export {};

import type { Params } from './types';
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
declare function randimals(params?: Params): Promise<string>;
export = randimals;

import type { Format, Case } from './types';
/**
 * Converts a given string to a specific format such as pascal case
 * @param format  {String} name of format (ex: 'pascal')
 * @param str     {String} input string
 * @returns       {String} formatted string
 */
declare const formatString: (format: Format, str: string) => string;
/**
 * Converts a given word to a specific case such as uppercase
 * @param format  {String} name of format ('lower', 'upper', or 'capital)
 * @param word    {String} input word
 * @returns       {String} formatted word
 */
declare const formatWord: (format: Case, word: string) => string;
export { formatString, formatWord };

/**
 * Selects a random adjective
 * @returns {String} Randomly chosen adjective
 */
declare const randomAdjective: () => Promise<string>;
/**
 * Selects a random animal
 * @returns {String} Randomly chosen animal
 */
declare const randomAnimal: () => Promise<string>;
export { randomAdjective, randomAnimal };
