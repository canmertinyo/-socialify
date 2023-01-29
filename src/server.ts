import { config } from './config'
import { App } from './app'

function bootstrap(): void {
  const app = new App()

  app.listen(config.PORT)
}

bootstrap()
