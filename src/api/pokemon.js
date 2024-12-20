import { API_Host } from "../utils/constants";

export async function getPokemonsAPI(endpointUrl) {
    try{
        const url = `${API_Host}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}

export async function getPokemonsApiTotal() {
    try{
        const url = `${API_Host}/pokemon?limit=1118`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}

export async function getPokemonDetailsApi(id) {
    try{
        const url = `${API_HOST}/pokemon/${id}`
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}