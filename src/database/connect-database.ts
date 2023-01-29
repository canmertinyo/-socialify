import mongoose from 'mongoose'

import { config } from '../config/config'
export function connectToDatabase(): void {
  mongoose.set('strictQuery', false)
  mongoose
    .connect(config.DATABASE_URI)
    .then(() => {
      console.log('Connected to the database!')
    })
    .catch((error) => {
      console.error(error)
    })
}
