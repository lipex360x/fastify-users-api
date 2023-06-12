import type { CreateUserProps } from '../schemas'
import { BaseEntity } from './base.entity'

export class UserEntity extends BaseEntity {
  name: string
  email: string
  password: string
  birthDate: Date

  constructor(userData: CreateUserProps) {
    super()
    this.name = userData.name
    this.email = userData.email
    this.password = userData.password
    this.birthDate = userData.birthDate
  }
}
