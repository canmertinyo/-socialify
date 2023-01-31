import { Prop, Schema, SchemaFactory } from 'mondec'

@Schema({
  versionKey: false
})
class User {
  @Prop({ type: String, required: true })
  public name!: string

  @Prop({ type: String, required: true })
  public password!: string

  @Prop({ type: String, required: true, unique: true })
  public email!: string

  @Prop({ type: String, default: 'profile.jpg', required: false })
  public avatar!: string
}

export const UserSchema = SchemaFactory.createForClass('users', User)
