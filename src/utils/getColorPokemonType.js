import {Pokemon_Type_Colors} from "./constants";

const getCollorByPokemonType = (type) => Pokemon_Type_Colors[type.toLowerCase()];

export default getCollorByPokemonType;