import dotenv from 'dotenv'
dotenv.config()

export const secret = process.env.SECRET || 'v0wjKhFhC2G6JicKYsa3vSvFtBWdB2HtZjO9u4B89BI'

export const port = process.env.PORT || 8000

const environment = process.env.NODE_ENV || 'development'

console.log(process.env.SECRET)
export const dbURI = environment === 'production' ? process.env.MONGODB_URI : 'mongodb://mongo:27017/recipesdb_dev'

