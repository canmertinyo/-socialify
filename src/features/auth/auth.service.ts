import { Injectable } from 'magnodi'

import { UserSchema } from '@features/user'

@Injectable()
export class AuthService {
  public async register(): Promise<void> {
    await UserSchema.create({
      name: 'can mert',
      email: 'canmer23tinson@gmail.com',
      password: 'asdasd',
      avatar: 'default.jpg'
    })
  }
}
