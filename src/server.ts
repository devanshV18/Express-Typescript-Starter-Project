import express from 'express'
import loadEnv from './config'

const app = express()



app.get('/ping', (req,res) => {
    res.send("Pong")
})

loadEnv()
console.log("Env vars loaded")

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})

