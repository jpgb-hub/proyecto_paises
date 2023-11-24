import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import './Root.css'


function Root() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => setPaises(data.results));
  }, []);

  return (
    <>
      <h1>PokeDex</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.name}>
            <Link to={`pokemons/${index + 1}`}>
              {pokemon.name}
              <LazyLoadImage
                alt={pokemon.name}
                height="96px"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                width="96px"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Root;