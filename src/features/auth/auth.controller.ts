import { Injectable } from 'magnodi'
import { Request, Response } from 'express'

import { AuthService } from './auth.service'
import { Controller } from '../../common/interfaces'

@Injectable()
export class UserController extends Controller {
  constructor(private readonly authService: AuthService) {
    super('auth')

    this.router.post('/register', this.register.bind(this))
  }

  public async register(req: Request, res: Response): Promise<void> {
    const addedUser = await this.authService.register()
    res.json(addedUser)
  }
}
