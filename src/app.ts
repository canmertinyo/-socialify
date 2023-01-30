import express, { Application } from 'express'
import { set, connect } from 'mongoose'

import { config } from './config'
import { AppOptions } from './interfaces'
import { loadControllersBySuffix } from './utils'

export class App {
  private app: Application

  constructor(private options: AppOptions) {
    this.app = express()
  }

  public async initialize(): Promise<void> {
    this.connectToDatabase()
    this.initializeMiddlewares()
    await this.initializeControllers()
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

  private async initializeControllers(): Promise<void> {
    const controllers = await loadControllersBySuffix(this.options.controllerSuffix)

    controllers.forEach((controller) => {
      const controllerPath = this.options.globalPrefix
        ? `/${this.options.globalPrefix}/${controller.name}`
        : `/${controller.name}`
      this.app.use(controllerPath, controller.router)
    })
  }
}
