import HttpStatus from 'http-status'

import { HttpException } from './http.exception'

export class NotFoundException extends HttpException {
  constructor(payload?: object | string, description = HttpStatus[HttpStatus.NOT_FOUND]) {
    super(
      HttpException.createPayload(payload, description, HttpStatus.NOT_FOUND),
      HttpStatus.NOT_FOUND
    )
  }
}
