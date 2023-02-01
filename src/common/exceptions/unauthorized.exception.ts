import HttpStatus from 'http-status'

import { HttpException } from './http.exception'

export class UnauthorizedException extends HttpException {
  constructor(payload?: object | string, description = HttpStatus[HttpStatus.UNAUTHORIZED]) {
    super(
      HttpException.createPayload(payload, description, HttpStatus.UNAUTHORIZED),
      HttpStatus.UNAUTHORIZED
    )
  }
}
