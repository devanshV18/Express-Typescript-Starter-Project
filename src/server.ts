import express from 'express'

const app = express()

const PORT:number = 2002

app.get('/ping', (req,res) => {
    res.send("Pong")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

