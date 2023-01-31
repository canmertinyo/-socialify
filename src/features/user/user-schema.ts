import mongoose from 'mongoose'

import { IUser } from '../../interfaces/index'

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, default: 'profile.jpg', required: false }
})

export const User = mongoose.model<IUser>('User', UserSchema)
