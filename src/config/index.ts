import dotenv from 'dotenv'
import { cleanEnv, url, str, port, num } from 'envalid'

dotenv.config()

const configObject = {
  DATABASE_URI: url(),
  NODE_ENV: str({ default: 'DEVELOPMENT', choices: ['DEVELOPMENT', 'PRODUCTION'] }),
  PORT: port({ default: 5000 }),
  GLOBAL_PREFIX: str({ default: 'api' }),
  SALT_WORK_FACTOR: num({ default: 10 })
}

export const config = cleanEnv(process.env, configObject)
