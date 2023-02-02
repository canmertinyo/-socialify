import { Injectable } from 'magnodi'

import { UserRepository } from '@features/user/repositories'

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  public async register(): Promise<void> {
    await this.userRepository.create({
      name: 'can mert',
      email: 'canmer23tinson@gmail.com',
      password: 'asdasd',
      avatar: 'default.jpg'
    })
  }
}
