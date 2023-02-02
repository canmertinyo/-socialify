import { Injectable } from 'magnodi'

import { BaseRepository } from '@common/repositories'

import { UserModel } from '../models'
import { IUser } from '../interfaces'

@Injectable()
export class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(UserModel)
  }
}
