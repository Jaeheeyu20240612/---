const FormatId = (pokemon) => {
  if (pokemon.id < 10) {
    return `No. 00${pokemon.id}`;
  } else if (pokemon.id < 100) {
    return `No. 0${pokemon.id}`;
  } else {
    return `No. ${pokemon.id}`;
  }
};

export { FormatId };
