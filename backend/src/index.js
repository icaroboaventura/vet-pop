import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import 'dotenv/config'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3003

await mongoose.connect(process.env.MONGO_URL, { dbName: 'vetpopdb' })

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
