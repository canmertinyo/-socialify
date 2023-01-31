import glob from 'glob'
import { Container } from 'magnodi'
//?

import { Controller, Type } from '../interfaces'

export async function loadControllersBySuffix(suffix: string): Promise<Controller[]> {
  const controllers: Controller[] = []

  const files = glob.sync('./src/features/**/' + suffix, { realpath: true })

  for await (const file of files) {
    try {
      const exports = await import(file)

      Object.values(exports).forEach((exportedClass: any) => {
        if (!exportedClass.constructor) return

        const controllerInstance = Container.resolve(exportedClass as unknown as Type)

        if (controllerInstance) {
          controllers.push(controllerInstance as Controller)
        }
      })
    } catch (error) {
      throw new Error('An error occurred while trying to load controllers.')
    }
  }
  return controllers
}
