import { Injectable } from 'magnodi'

import { UserRepository } from '../user/repositories'
import { RegisterDTO } from './dto'
import { IUser } from '../user'

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  public async register(user: RegisterDTO): Promise<IUser> {
    return this.userRepository.create(<IUser>user)
  }
}
