import mongoose from 'mongoose'

// USER SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, require: true },
    password: { type: String, require: true },
})

//USER MODEL
export const User = mongoose.model('User', userSchema) //El nombre de parametro siempre debe ser en singular
