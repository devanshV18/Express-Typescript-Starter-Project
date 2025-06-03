import express from "express"
import { pingHandler } from "../controllers/pingHandler"

const pingRouter = express.Router()

pingRouter.get('/ping', pingHandler)

export default pingRouter