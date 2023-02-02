import { Injectable } from 'magnodi'

import { UserService } from './user.service'
import { Controller } from '../../common/interfaces'

@Injectable()
export class UserController extends Controller {
  constructor(private readonly userService: UserService) {
    super('users')
  }
}
