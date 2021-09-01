import './App.css';
import PokemonProvider from './context/pokemons/Provider';
// Material Desing Bootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import Routes from "./routes";

function App() {
  return (
    <PokemonProvider>
      <Routes/>
    </PokemonProvider>
  );
}

export default App;
