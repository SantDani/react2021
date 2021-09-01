import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit"
import React from "react"
import PokemonListItem from "./PokemonListItem/PokemonListItem"

export default function PokemonList({pokemons}){
    return (
        <div>
            <h1>Pokemon list</h1>
            <MDBListGroup>
                {pokemons?.map((pokemon, index) => {
                    return (
                        
                        <MDBListGroupItem>
                            <PokemonListItem key={index} {...pokemon}/>
                        </MDBListGroupItem>
                        
                    )
                    
                })}
            </MDBListGroup>
        </div>
    )
}