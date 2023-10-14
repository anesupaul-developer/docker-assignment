import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

export default function connectToDb() {

  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }

  try {
    console.log('Testing application log ...............')
    return mongoose.connect(dbURI, options)
  } catch(err) {
    console.log('Error ;.....................................................................................')
    console.log(err)
  }
}