import dotenv from 'dotenv'
dotenv.config({ path: './config/config.env' })

export const config = {
  DATABASE_URI: process.env.DATABASE_URI as string,
  MODE: process.env.MODE as string,
  PORT: Number(process.env.PORT),
  HOST_NAME: process.env.HOST_NAME as string,
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY as string
}
