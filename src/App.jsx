import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://pokeapi.co/api/v2/pokemon/';
            const { data } = await axios.get(url);
            setPokemons(data.results);
        };

        consultarAPI();
    }, []);

    return (
        <div className="App">
            <h1>Pokemons</h1>
            {pokemons.map((pokemon) => (
                <ul key={pokemon.url} className="list">
                    <div className="card-pokemon">
                        <h2>Name: {pokemon.name}</h2>
                        <li>Url: {pokemon.url}</li>
                    </div>
                </ul>
            ))}
        </div>
    );
}

export default App;
