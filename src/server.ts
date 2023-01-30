import { Container } from 'magnodi'

import { config } from './config'
import { App } from './app'
import { UserController } from './features/user'

function bootstrap(): void {
  const userController = Container.resolve<UserController>(UserController)

  const app = new App([userController], config.GLOBAL_PREFIX)

  app.listen(config.PORT)
}

bootstrap()
