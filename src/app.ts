import express, { Application } from 'express'
import { set, connect } from 'mongoose'

import { config } from './config'
import { Controller } from './interfaces'

export class App {
  private app: Application

  constructor(private controllers: Controller[], private globalPrefix?: string) {
    this.app = express()

    this.connectToDatabase()
    this.initializeMiddlewares()
    this.initializeControllers(this.controllers)
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

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      const controllerPath = this.globalPrefix
        ? `/${this.globalPrefix}/${controller.name}`
        : `/${controller.name}`
      this.app.use(controllerPath, controller.router)
    })
  }
}
