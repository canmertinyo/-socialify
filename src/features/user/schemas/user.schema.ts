/* eslint-disable no-useless-escape */
import bcrypt from 'bcrypt'
import mongoose, { Schema } from 'mongoose'

import { config } from '../../../config/index'
import { IUser } from '../interfaces'

const User = new Schema<IUser>({
  name: { type: String, required: true },
  isMailConfirmed: { type: Boolean, default: false, required: false },
  email: {
    type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'No mikey nooo that was so not right'
    ],
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true
  },
  avatar: { type: String, default: 'profile.jpg', required: true },
  password: { type: String, required: true }
})

User.pre('save', function (next: any) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  if (!user.isModified('password')) return next()

  bcrypt.genSalt(config.SALT_WORK_FACTOR, function (err: any, salt: any) {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      // override the cleartext password with the hashed one
      user.password = hash
      next()
    })
  })
})

export const UserSchema = mongoose.model('user', User)
