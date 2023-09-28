import mongoose from "mongoose"

const URL = 'mongodb+srv://user_admin:user1234@cluster0.n7gd5y9.mongodb.net/social'

export const dbConnection = async () => {
    await mongoose.connect(URL)
} 