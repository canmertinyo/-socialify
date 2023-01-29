import express, { Application } from 'express'
import { set, connect } from 'mongoose'

import { config } from './config'

export class App {
  private app: Application

  constructor() {
    this.app = express()

    this.connectToDatabase()
    this.initializeMiddlewares()
  }

  public getServer(): Application {
    return this.app
  }

  public listen(port: number): void {
    this.app.listen(port)
  }

  private connectToDatabase(): void {
    if (config.NODE_ENV !== 'PRODUCTION') {
      set('debug', true)
    }
    set('strictQuery', false)
    connect(config.DATABASE_URI).catch(console.error)
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json())
  }
}
