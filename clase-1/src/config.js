import dotenv from 'dotenv'

const enviroment = "prod"

dotenv.config({
    path: enviroment == "dev" ? './.env.dev' : './.env.prod'
})

export default {
    user: process.env.USER,
    port: process.env.PORT,
    url_mongo: process.env.MONGO_URL,
    pass_mongo: process.env.PASS_MONGO
}