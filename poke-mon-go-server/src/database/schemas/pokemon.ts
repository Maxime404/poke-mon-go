import mongoose, { Schema } from 'mongoose'

export default mongoose.model(
  'Pokemon',
  new Schema({
    id: Number,
    num: String,
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
    evolution: [{}],
    starter: Boolean,
    legendary: Boolean,
    mythical: Boolean,
    ultraBeast: Boolean,
    mega: Boolean,
    gen: Number,
    candy: String,
    candy_count: Number,
    egg: String,
    spawn_chance: Number,
    avg_spawns: Number,
    spawn_time: String
  })
)
