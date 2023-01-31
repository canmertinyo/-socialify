import { Injectable } from 'magnodi'

import { UserSchema } from '../schemas/index'

@Injectable()
export class AuthService {
  public async addUser(): Promise<void> {
    await UserSchema.create({
      name: 'can mert',
      email: 'canmer23tinson@gmail.com',
      password: 'asdasd',
      avatar: 'default.jpg'
    })
  }
}
