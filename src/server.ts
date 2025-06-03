import express from 'express'
import {serverConfig} from './config'
import pingRouter from './routers/v1/pingRouter'
import v1Router from './routers/v1/index.router'
import v2Router from './routers/v2/index.router'

const app = express()

app.use('/api/v1', v1Router)
app.use('/api/v1', v2Router)

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on ${serverConfig.PORT}`)
})

