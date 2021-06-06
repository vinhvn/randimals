import { adjectives, animals } from './lists';

/**
 * Selects a random adjective
 * @returns {String} Randomly chosen adjective
 */
const randomAdjective = (): string => {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
};

/**
 * Selects a random animal
 * @returns {String} Randomly chosen animal
 */
const randomAnimal = (): string => {
  return animals[Math.floor(Math.random() * animals.length)];
};

export { randomAdjective, randomAnimal };
