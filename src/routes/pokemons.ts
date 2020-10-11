import { Router, Request, Response } from 'express'
import mongoose, { Schema } from 'mongoose'

const pokemonsData = mongoose.model('Pokemon');

const api = Router()

api.get('/', (req: Request, res: Response) => {
    pokemonsData.find().lean().exec((err, pokemons) => {
        return res.json(pokemons)
    })
})

api.get('/:id', (req, res) => {req.params.id
    pokemonsData.find({ id: req.params.id }, (err, docs) => {
        if (docs.length) {
            res.json(docs[0])
        } else {
            res.send(`<h3>Sorry, there are no pokemon with id #${req.params.id} here!</h3>`)
        }
    })
})

export default api