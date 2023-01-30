import { Injectable } from 'magnodi'

@Injectable()
export class UserService {
  private readonly users = [
    { id: 1, username: 'canccevik' },
    { id: 2, username: 'canmertinyo' }
  ]

  public getUsers(): object[] {
    return this.users
  }
}
