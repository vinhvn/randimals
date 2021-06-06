export type Format =
  | 'camel'
  | 'capital'
  | 'constant'
  | 'dot'
  | 'header'
  | 'no'
  | 'param'
  | 'pascal'
  | 'path'
  | 'sentence'
  | 'snake';

export type Case = 'lower' | 'upper' | 'capital';

interface Options {
  adjectives?: number;
  animals?: number;
  format?: Format;
  case?: Case;
  separator?: string;
}

export type Params = number | string | Options | undefined;
