import './App.css';
import PokemonProvider from './context/pokemons/Provider';
// Material Desing Bootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import Routes from "./routes";
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <PokemonProvider>
      <NavBar/>
      <Routes/>
    </PokemonProvider>
  );
}

export default App;
