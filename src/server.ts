import { config } from '@config/index'

import { App } from './app'

async function bootstrap(): Promise<void> {
  const app = new App({
    controllerSuffix: '*.controller.ts',
    globalPrefix: 'api'
  })

  await app.initialize()

  app.listen(config.PORT)
}

bootstrap()
