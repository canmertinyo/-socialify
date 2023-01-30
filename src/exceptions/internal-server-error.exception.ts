import HttpStatus from 'http-status'

import { HttpException } from './http.exception'

export class InternalServerErrorException extends HttpException {
  constructor(
    payload?: object | string,
    description = HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR]
  ) {
    super(
      HttpException.createPayload(payload, description, HttpStatus.INTERNAL_SERVER_ERROR),
      HttpStatus.INTERNAL_SERVER_ERROR
    )
  }
}
