import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import cors from "cors"
import { dbConnection } from "./database/db.js"
import { userRouter } from "./routes/user.routes.js"

const server = express()
const PORT = process.env.APP_PORT
const { Schema } = mongoose

server.use(express.json()) //Trasnforma el cuerpo de la petición en un JSON
server.use(cors()) // Permite recibir solicitudes de clientes fuera de mi dominio
server.use('/api/v1/users', userRouter)

async function main(){
    try {
        await dbConnection()
        server.listen(PORT, () => {
            console.log(`Server app is run in http://localhost:${PORT}`);
        }) 
    } catch (error) {
        console.log(error.message);   
    }
}
main()