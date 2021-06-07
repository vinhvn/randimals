/**
 * Selects a random adjective
 * @returns {String} Randomly chosen adjective
 */
const randomAdjective = async (): Promise<string> => {
  return import('./data/adjectives').then((adjectives: any) => {
    const list = adjectives.default;
    return list[Math.floor(Math.random() * list.length)];
  });
};

/**
 * Selects a random animal
 * @returns {String} Randomly chosen animal
 */
const randomAnimal = async (): Promise<string> => {
  return import('./data/animals').then((animals: any) => {
    const list = animals.default;
    return list[Math.floor(Math.random() * list.length)];
  });
};

export { randomAdjective, randomAnimal };
