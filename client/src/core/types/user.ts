import { Language, Level, Role } from "./generics"

export type UserType = {
  _id?: string,
  token?: string,
  email: string,
  username: string,
  name: string
  role: Role,
  language: Language,
  targetLanguage: Language,
  password?: string,
  levels?: Level[],
  createdAt?: Date,
}