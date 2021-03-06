import React from "react";
import {
  BrowserRouter as Router, // Tag main is the container of Routers
  Switch, // Fo change between pages
  Route, // It is a router. It is necessary for one for page
  //Link // It for send to other page. IS a tag link like <a></a>
} from "react-router-dom";

import Home from "./../views/home"
import PageNotFound from "../views/404";
import PokeDetail from "../views/PokeDetail";
import useScrollToTop from "../components/ScrollToTop";
import ScrollToTop from "../components/ScrollToTop";


export default function Routes(){
    
    return(
        <Router>
            {/* exact It is only works with the exact route.
                <Route path="/" exact>  = only and only if "/"
            */}
            <ScrollToTop/>
            <Switch>
                <Route path="/" exact> 
                    <Home/>
                </Route>
                <Route path="/pokemon/:id">
                    <PokeDetail/>
                </Route>
                <Route>
                    <PageNotFound></PageNotFound>
                </Route>
            </Switch>
        </Router>
    );
}