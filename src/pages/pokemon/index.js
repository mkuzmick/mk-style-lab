/** @jsx jsx */
import { jsx } from 'theme-ui'
import "@fontsource/chewy"
import allPokemons from "../../components/pokemon/all-the-pokemons"

export default () => {
    var pokemon1 = allPokemons[Math.floor(Math.random() * allPokemons.length)];
    var pokemon2 = allPokemons[Math.floor(Math.random() * allPokemons.length)];

    return (
        <div sx={{
            margin: "50px"
        }}>
            
            <div
                sx={{
                    margin: "auto",
                    maxWidth: "300px",
                    textAlign: "center"
                }}
            >
                <h1
                sx={{
                    fontSize:"5em",
                    fontFamily: "Chewy",
                    color: "rgb(86, 255, 95)",
                    lineHeight: "1",
                    margin: "0"
                }}
            >{pokemon1.name}</h1>
                <img src={pokemon1.image} alt={pokemon1.name} style={{width: "100%"}}/>
            </div>
            <div
                sx={{
                    margin: "auto",
                    maxWidth: "300px",
                    textAlign: "center"
                }}
            >
                <h1
                sx={{
                    fontSize:"5em",
                    fontFamily: "Chewy",
                    color: "rgb(86, 255, 95)",
                    lineHeight: "1",
                    margin: "0"
                }}
            >{pokemon2.name}</h1>
                <img src={pokemon2.image} alt={pokemon2.name} style={{width: "100%"}}/>
            </div>
        </div>
    )
}