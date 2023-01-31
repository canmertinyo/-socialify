import { NextFunction, Request, Response } from 'express'
import HttpStatus from 'http-status'

import { HttpException } from '../exceptions'

export function errorHandler(
  error: HttpException,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  if (!(error instanceof Error)) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR]
    })
  }
  res.status(error.statusCode).json(error.payload)
}

//... RRR
