import {useContext, useEffect} from "react"
import PokemonContext from "../../context/pokemons";

export default function Home(){

    const {showAlert} = useContext(PokemonContext);

    // console.log(showAlert);
    
    // At mount component
    useEffect(() => {
        showAlert();
    }, [])

    return (<div>Home page</div>);
}