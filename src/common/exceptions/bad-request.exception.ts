import HttpStatus from 'http-status'

import { HttpException } from './http.exception'

export class BadRequestException extends HttpException {
  constructor(payload?: object | string, description = HttpStatus[HttpStatus.BAD_REQUEST]) {
    super(
      HttpException.createPayload(payload, description, HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST
    )
  }
}
