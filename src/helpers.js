import { v4 as uuid } from "uuid";
/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

const formatCardData = (cardData) => {
  return {
    id: uuid(),
    image: cardData.cards[0].image,
  };
};

const formatPokemonData = (pokemonData) => {
  return {
    id: uuid(),
    front: pokemonData.sprites.front_default,
    back: pokemonData.sprites.back_default,
    name: pokemonData.name,
    stats: pokemonData.stats.map((stat) => ({
      value: stat.base_stat,
      name: stat.stat.name,
    })),
  };
};

export { choice, formatCardData, formatPokemonData };
