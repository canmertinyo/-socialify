import { Injectable } from 'magnodi'
import { Request, Response } from 'express'

import { Controller } from '../../../interfaces/index'
import { AuthService } from '../auth/auth.service'

@Injectable()
export class UserController extends Controller {
  constructor(private readonly authService: AuthService) {
    super('auth')

    this.router.post('/register', this.index.bind(this))
  }

  public async index(req: Request, res: Response): Promise<void> {
    const addedUser = await this.authService.addUser()
    res.json(addedUser)
  }
}
