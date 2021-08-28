import React from "react"
import PokemonListItem from "./PokemonListItem"

export default function PokemonList({pokemons}){
    return (
        <div>
            <h1>Pokemon list</h1>
            {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon}/>)}
        </div>
    )
}