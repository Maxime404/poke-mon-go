import mongoose, { Schema } from 'mongoose'

export default mongoose.model(
  'Pokemon',
  new Schema({
    id: Number,
    name: String,
    species: String,
    types: [String],
    abilities: {},
    eggGroups: [String],
    gender: [Number],
    height: String,
    weight: String,
    family: {},
    image: String,
    description: String,
    weaknesses: [String],
    evolution: [{}]
  })
)
