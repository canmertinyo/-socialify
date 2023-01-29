import express, { Request, Response } from 'express'

import { config } from './config'
import { connectToDatabase } from './database'

connectToDatabase()

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Just created a temporary block.'
  })
})

app.listen(config.PORT)
