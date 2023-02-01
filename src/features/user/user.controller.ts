import { Injectable } from 'magnodi'

import { Controller } from '../../common/interfaces'
import { UserService } from './user.service'

@Injectable()
export class UserController extends Controller {
  constructor(private readonly userService: UserService) {
    super('users')
  }
}
