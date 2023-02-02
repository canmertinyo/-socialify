import { Injectable } from 'magnodi'

import { UserModel } from '../models'
import { IUser } from '../interfaces'
import { BaseRepository } from '../../../common/repositories'

@Injectable()
export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(UserModel)
  }
}
