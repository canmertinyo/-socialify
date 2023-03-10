import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { Schema, Prop, SchemaFactory } from 'mondec'

import { IUser } from '../interfaces'

@Schema({
  versionKey: false
})
class User {
  @Prop({
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 20,
    lowercase: true
  })
  public username!: string

  @Prop({
    type: String,
    match: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    required: true,
    unique: true,
    lowercase: true
  })
  public email!: string

  @Prop({
    type: String,
    required: true,
    minlength: 6,
    maxlength: 40
  })
  public password!: string

  @Prop({
    type: Boolean,
    default: false
  })
  public isMailConfirmed!: boolean

  @Prop({
    type: String,
    default: 'profile.jpg',
    required: true
  })
  public avatar!: string
}

const userSchema = SchemaFactory.createForClass<IUser>(User)

userSchema.pre('save', function (next) {
  const user = this

  if (!user.isModified('password')) return next()

  user.password = bcrypt.hashSync(user.password, 10)

  next()
})

export const UserModel = mongoose.model<IUser>('user', userSchema)
