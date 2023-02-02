import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class RegisterDTO {
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  public username!: string

  @IsNotEmpty()
  @IsEmail()
  public email!: string

  @IsNotEmpty()
  @IsString()
  @Length(6, 40)
  public password!: string
}
