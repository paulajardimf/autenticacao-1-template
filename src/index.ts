import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { productRouter } from './router/productRouter'
import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})

app.use("/users", userRouter)
app.use("/products", productRouter)
