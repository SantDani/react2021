import create from "zustand";

import apiCall from "../../api";
const URL_API = 'https://pokeapi.co/api/v2/';

const usePokemonStore = create((set, get) => ({
    
    getPokemons: async () => {

        try {
            // console.log("Call pokemons from Zustand");
            // set default
            set({isLoading: false, errorMessage:"", hasError:false});
            const pokemonResult = await apiCall({url: `${URL_API}pokemon?limit=100&offset=0`});
            
            set({pokemons: pokemonResult.results});

        } catch (e) {
            console.error(e);
            set({pokemons: [], hasError: true, errorMessage: "Connection error. Check your connection."})
        }finally{
            set({isLoading: false});
        }
    },
    pokemons: [],
    getPokemonDetail: async (id) => {
       
        if(id) Promise.reject("ID is necessary");
        // console.log("Call pokemons from Zustand");
        try {
            set({isLoading: true, hasError: false , errorMessage: ""});
            const pokemonDetail = await apiCall({url: `${URL_API}pokemon/${id}`});
            set({pokemonDetail})

        } catch (e) {
            set({
                hasError: true, 
                errorMessage:"Connection error. Check your connection.",
                pokemonDetail:{}
             })
        }finally{
            set({isLoading: false})
        }
    },
    pokemonDetail: [],
    isLoading: false,
    errorMessage: "",
    hasError: false
}));

export default usePokemonStore;

/*
 try {

        } catch (e) {
            console.error(e);
            setPokemons([]);

            setErrorMessage("Connection error. Check your connection.");
            setHasError(true);
        }finally{
            setIsLoading(false);
        }*/