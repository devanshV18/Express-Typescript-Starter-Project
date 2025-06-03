import dotenv from "dotenv"

type ServerConfig = {
    PORT: number
}

function loadEnv(){
    dotenv.config() //config function in dotnet package enables us to load all env vars from .env file so that we cann access them using process global object
    console.log("Env vars loaded")
}

loadEnv() //calling the function here itself to load all env vars before executing the server.ts file

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT)
}