import React from "react";
// import ReactDOM from "react-dom";
import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  useParams
} from "react-router-dom";


export default function PokeDetail(){
    let {id} = useParams();

    return (
        <div>
            
            <h2>Poke Detail {id}</h2>
        </div>
    )
}