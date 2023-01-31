import { Injectable } from 'magnodi'
import { Request, Response } from 'express'

import { Controller } from '../../interfaces'
import { UserService } from './user.service'

@Injectable()
export class UserController extends Controller {
  constructor(private readonly userService: UserService) {
    super('users')

    this.router.get('/', this.index.bind(this))
  }

  public index(req: Request, res: Response): void {
    const users = this.userService.getUsers()
    res.status(200).json(users)
  }
}
