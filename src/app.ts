import 'express-async-errors'
import express, { Application } from 'express'
import { set, connect } from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import compression from 'compression'

import { config } from './config'
import { AppOptions } from './interfaces'
import { loadControllersBySuffix } from './utils'
import { errorHandler } from './middlewares'

export class App {
  private app: Application

  constructor(private options: AppOptions) {
    this.app = express()
  }

  public async initialize(): Promise<void> {
    this.connectToDatabase()
    this.initializeMiddlewares()
    await this.initializeControllers()
    this.initializeErrorHandler()
  }

  public getServer(): Application {
    return this.app
  }

  public listen(port: number, hostName: string): void {
    this.app.listen(port, hostName)
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
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(
      cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE']
      })
    )
    this.app.use(helmet())
    this.app.use(
      compression({
        level: 6
      })
    )
    this.app.use(morgan('tiny'))
  }

  private async initializeControllers(): Promise<void> {
    //??
    const controllers = await loadControllersBySuffix(this.options.controllerSuffix)

    //sonu .controller olanları mı alıyor
    controllers.forEach((controller) => {
      const controllerPath = this.options.globalPrefix
        ? `/${this.options.globalPrefix}/${controller.name}`
        : `/${controller.name}`
      this.app.use(controllerPath, controller.router)
    })
  }

  private initializeErrorHandler(): void {
    this.app.use(errorHandler)
  }
}
