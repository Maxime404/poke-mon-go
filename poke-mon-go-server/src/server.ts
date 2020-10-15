import { error, info, success } from './helpers/display'
import checkEnv from './helpers/checkEnv'
import { connect } from './database'
import express from 'express'
import cors from 'cors'
import _ from 'lodash'

import Pokemon from './database/schemas/pokemon'
import mongoose from 'mongoose'
import api from './routes/api'

const jsonPokemons = require('../data/pokemons.json')

async function main() {
  try {
    checkEnv(['PORT', 'HOST', 'DATABASE_URI'])
    info('Server initialization...')
    await connect(process.env.DATABASE_URI as string)
    success('Database successfully connected!')

    const pokemonsData = mongoose.model('Pokemon');

    _.each(jsonPokemons, (jsonPokemon) => {

      pokemonsData.find({ id: jsonPokemon.number }, (err, docs) => {
        if (!docs.length) {
          const pokemon = new Pokemon({
            id: jsonPokemon.number,
            num: jsonPokemon.num,
            name: jsonPokemon.name,
            species: jsonPokemon.species,
            types: jsonPokemon.types,
            abilities: jsonPokemon.abilities,
            eggGroups: jsonPokemon.eggGroups,
            gender: jsonPokemon.gender,
            height: jsonPokemon.height,
            weight: jsonPokemon.weight,
            family: jsonPokemon.family,
            image: jsonPokemon.sprite,
            description: jsonPokemon.description,
            weaknesses: jsonPokemon.weaknesses,
            evolution: jsonPokemon.evolution,
            starter: jsonPokemon.starter,
            legendary: jsonPokemon.legendary,
            mythical: jsonPokemon.mythical,
            ultraBeast: jsonPokemon.ultraBeast,
            mega: jsonPokemon.mega,
            gen: jsonPokemon.gen,
            candy: jsonPokemon.candy,
            candy_count: jsonPokemon.candy_count,
            egg: jsonPokemon.egg,
            spawn_chance: jsonPokemon.spawn_chance,
            avg_spawns: jsonPokemon.avg_spawns,
            spawn_time: jsonPokemon.spawn_time
          })

          pokemon.save((err) => {
            if (err) {
              error('sorry')
            } else {
              success(`pokemon ${jsonPokemon.name} saved!`)
            }
          })
        }
      })
    })
  } catch (e) {
    error(e.message)
  }
}

function server() {
  const app = express()

  app.use(cors());

  app.use('/api', api)

  app.listen(process.env.PORT, function () {
    success(`Server in listening on port ${process.env.PORT}!`)
  })
}

// Entry point 😎
main()
server()
