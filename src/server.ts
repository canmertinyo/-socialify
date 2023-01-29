import express, { Request, Response } from 'express'

import { connectToDatabase } from './database/connect-database'
const app = express()
import { config } from './config/config'

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Just created a temporary block.'
  })
})

app.listen(config.PORT, config.HOST_NAME, () => {
  console.log(`Server running on : http://${config.HOST_NAME}:${config.PORT} mode : ${config.MODE}`)
  connectToDatabase()
})
