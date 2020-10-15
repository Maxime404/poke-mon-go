import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeLi from './PokeLi'
import PokeLiUrl from './PokeLiUrl'

export default class Pokemons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pokemon: {}, pathname: props.location.pathname.slice(1) };
    }

    componentDidMount() {
        this.fetchListPokemonSpec();
    }

    async fetchListPokemonSpec() {

        const response = await fetch(`http://localhost:4242/api/pokemons/${this.state.pathname}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
        this.setState({ pokemon: data });
    }

    render() {
        const { pokemon } = this.state;

        return (
            <div class="p-2">
                <div class="container mb-5">
                    <div class="row">
                        <div class="col image-container">
                            <img class="align-self-center image" src={pokemon.image} alt={`#${pokemon.num}${pokemon.name}`} />
                            <h2 class="align-self-center" key={pokemon.id}>
                                #{pokemon.num} {pokemon.name}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="container mb-2">
                    <div class="row border-bottom text-left mb-3">
                        <p class="mb-1 h4">
                            Description
                        </p>
                    </div>
                    <div class="row">
                        <ul class="col-md-6 p-2">
                            <PokeLi name="Numero" value={"#" + pokemon.num} />
                            <PokeLi name="Name" value={pokemon.name} />
                            <PokeLi name="Height" value={pokemon.height} />
                            <PokeLi name="Weight" value={pokemon.weight} />
                        </ul>
                        <ul class="col-md-6 p-2">
                            <PokeLi name="Species" value={pokemon.species} />
                            <PokeLi name={pokemon.types && pokemon.types.length > 1 ? "Types" : "Type"} value={pokemon.types} />
                            <PokeLi name="Description" value={pokemon.description} />
                        </ul>
                    </div>
                </div>
                <div class="container mb-2">
                    <div class="row border-bottom text-left mb-3">
                        <p class="col-md-12 mb-1 h4">
                            Characteristics / Specs
                        </p>
                    </div>
                    <div class="row">
                        <ul class="col-md-4 p-2">
                            <PokeLi name={pokemon.weaknesses && pokemon.weaknesses.length > 1 ? "Weaknesses" : "weakness"} value={pokemon.weaknesses} />
                            <PokeLi name={pokemon.gender && pokemon.gender.length > 1 ? "Genders" : "Gender"} value={pokemon.gender} />
                            <PokeLi name="Candy" value={pokemon.candy} />
                            <PokeLi name="Candy count" value={pokemon.candy_count} />
                            <PokeLi name="Egg" value={pokemon.egg} />
                        </ul>
                        <ul class="col-md-4 p-2">
                            <PokeLi name="Starter" value={pokemon.starter} />
                            <PokeLi name="Legendary" value={pokemon.legendary} />
                            <PokeLi name="Mythical" value={pokemon.mythical} />
                            <PokeLi name="Mega" value={pokemon.mega} />
                            <PokeLi name="Generation" value={"#" + pokemon.gen} />
                        </ul>
                        <ul class="col-md-4 p-2">
                            <PokeLi name="Spawn chance" value={pokemon.spawn_chance} />
                            <PokeLi name="AVG spawns" value={pokemon.avg_spawns} />
                            <PokeLi name="Spawn time" value={pokemon.spawn_time} />
                        </ul>
                    </div>
                </div>
                <div class="container mb-2">
                    <div class="row border-bottom text-left mb-3">
                        <p class="col-md-12 mb-1 h4">
                            {pokemon.evolution && pokemon.evolution.length > 1 ? "Next volutions" : "Next volution"}
                        </p>
                    </div>
                    {pokemon.evolution && pokemon.evolution.length > 0
                        ? <div class="row">
                            {pokemon.evolution && pokemon.evolution.length > 1
                                ? <ul class="col-md-6 p-2">
                                    <PokeLiUrl name="First" value={`#${pokemon.evolution[0].num} ${pokemon.evolution[0].name}`} id={Number(pokemon.evolution[0].num)} />
                                    <PokeLiUrl name="Second" value={`#${pokemon.evolution[1].num} ${pokemon.evolution[1].name}`} id={Number(pokemon.evolution[1].num)} />
                                </ul>
                                : <ul class="col-md-6 p-2">
                                    <PokeLiUrl name="Next evolution" value={`#${pokemon.evolution[0].num} ${pokemon.evolution[0].name}`} id={Number(pokemon.evolution[0].num)} />
                                </ul>
                            }
                        </div>
                        : <ul class="col-md-6 p-2">
                            <p>Not evolution</p>
                        </ul>
                    }
                </div>
            </div>
        )
    }
}