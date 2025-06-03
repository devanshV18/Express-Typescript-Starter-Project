import express from "express"
import pingRouter from "./pingRouter"

const v1Router = express.Router()

v1Router.use('/ping', pingRouter)

export default v1Router