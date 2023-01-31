import dotenv from 'dotenv'
import { cleanEnv, url, str, port } from 'envalid'

dotenv.config()

const configObject = {
  DATABASE_URI: url(),
  NODE_ENV: str({ default: 'DEVELOPMENT', choices: ['DEVELOPMENT', 'PRODUCTION'] }),
  PORT: port({ default: 5000 }),
  GLOBAL_PREFIX: str({ default: 'api' }),
  HOST_NAME: str({ default: 'localhost' })
}

type Config = { [Key in keyof typeof configObject]: any }
//+

export const config: Config = cleanEnv(process.env, configObject)
