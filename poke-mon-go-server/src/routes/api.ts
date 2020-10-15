import { Router, Request, Response }  from 'express'
import pokemons from './pokemons'

const api = Router()

api.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hi, welcome to our pokedex API!</h1>')
})

api.use('/pokemons', pokemons)

export default api