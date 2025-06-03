import dotenv from "dotenv"

function loadEnv(){
    dotenv.config() //config function in dotnet package enables us to load all env vars from .env file so that we cann access them using process global object
}

export default loadEnv