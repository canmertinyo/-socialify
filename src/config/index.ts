import dotenv from 'dotenv'

dotenv.config()

export const config = {
  DATABASE_URI: String(process.env.DATABASE_URI),
  NODE_ENV: process.env.NODE_ENV || 'DEV',
  PORT: Number(process.env.PORT) || 3001
}
