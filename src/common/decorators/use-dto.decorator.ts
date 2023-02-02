import { Request, Response } from 'express'
import { validateSync, ValidationError } from 'class-validator'
import { plainToClass } from 'class-transformer'
import HttpStatus from 'http-status'

import { Type } from '../interfaces'
import { BadRequestException } from '../exceptions'

export function UseDto(dto: Type, fieldName?: string): MethodDecorator {
  return (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor): void => {
    const method = descriptor.value

    descriptor.value = function (req: Request, res: Response): void {
      const object: object = plainToClass(dto, fieldName ? req.body[fieldName] : req.body)
      let errors: ValidationError[]

      try {
        errors = validateSync(object, {
          whitelist: true,
          forbidNonWhitelisted: true,
          stopAtFirstError: true
        })
      } catch (error) {
        throw new BadRequestException(`Request's body should contains '${fieldName}' field.`)
      }

      if (errors.length > 0) {
        const errorMessages: string[] = []

        errors.forEach((err: ValidationError) => {
          Object.keys(err.constraints!).forEach((key) => {
            errorMessages.push(err.constraints![key])
          })
        })

        throw new BadRequestException({
          statusCode: HttpStatus.BAD_REQUEST,
          errors: errorMessages
        })
      }
      method.apply(this, [req, res])
    }
  }
}
