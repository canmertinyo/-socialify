import { Injectable } from 'magnodi'
import { Request, Response } from 'express'

import { AuthService } from './auth.service'
import { Controller } from '../../common/interfaces'
import { UseDto } from '../../common/decorators/use-dto.decorator'
import { RegisterDTO } from './dto'

@Injectable()
export class AuthController extends Controller {
  constructor(private readonly authService: AuthService) {
    super('auth')

    this.router.post('/register', this.register.bind(this))
  }

  @UseDto(RegisterDTO, 'user')
  public async register(req: Request, res: Response): Promise<void> {
    const user = await this.authService.register(req.body.user)
    res.json(user)
  }
}
