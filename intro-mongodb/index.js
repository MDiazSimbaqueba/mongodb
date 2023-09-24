import express from "express" //para importar los objetos de express
import mongoose from "mongoose"

const server = express() //encapsula los objetos
const PORT = 3000

server.use(express.json()) //para que pueda recibir json en las peticiones

async function main(){
    try {
        await mongoose.connect('mongodb+srv://user_admin:user123@cluster0.n7gd5y9.mongodb.net/')

        server.listen(PORT, () => {
            console.log(`Server app is run in http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
}
main()