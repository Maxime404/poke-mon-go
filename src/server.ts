import { error, info, success } from './helpers/display'
import checkEnv from './helpers/checkEnv'
import { connect } from './database'

import Pokemon from './database/schemas/pokemon'

async function main() {
  try {
    checkEnv(['PORT', 'HOST', 'DATABASE_URI'])
    info('Server initialization...')
    await connect(process.env.DATABASE_URI as string)
    success('Database successfully connected!')

    const pokemon = new Pokemon()

    pokemon.save((err) => {
      if (err) {
        error('sorry')
      }

      success('pokemon saved!')
    })
  } catch (e) {
    error(e.message)
  }
}

// Entry point 😎
main()
