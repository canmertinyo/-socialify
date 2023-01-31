import dotenv from 'dotenv'
import { cleanEnv, url, str, port } from 'envalid'

dotenv.config()

const configObject = {
  DATABASE_URI: url(),
  NODE_ENV: str({ default: 'DEVELOPMENT', choices: ['DEVELOPMENT', 'PRODUCTION'] }),
  PORT: port({ default: 5000 }),
  GLOBAL_PREFIX: str({ default: 'api' })
}

export const config = cleanEnv(process.env, configObject)
