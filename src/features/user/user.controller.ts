import { Injectable } from 'magnodi'
import { Request, Response } from 'express'

import { Controller } from '../../interfaces'

@Injectable()
export class UserController extends Controller {
  constructor() {
    super('users')

    this.router.use('/', this.index.bind(this))
  }

  public index(req: Request, res: Response): void {
    res.send('Hello from user controller!')
  }
}
