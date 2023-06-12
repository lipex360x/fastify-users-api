import { hash } from 'bcryptjs'

import { calculateUserAge } from '@/core/helpers'

import type { CreateUserProps } from '../../domain/schemas'
import type { UserMapper } from '../mappers'
import type { UserRepository } from '../repositories'

export class CreateUserUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly mapper: UserMapper,
  ) {}

  async execute(userData: CreateUserProps) {
    this.validateEmailFormat(userData.email)

    await this.validateIfUserIsDuplicated(userData.email)

    this.validateUserAge(userData.birthDate)

    this.validatePassowordLegth(userData.password)

    userData.password = await hash(userData.password, 8)

    const user = await this.repository.create(userData)

    return { user: this.mapper.fromDatabaseToDomain(user) }
  }

  private validateEmailFormat(email: string) {
    if (
      !String(email)
        .toLowerCase()
        .match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/)
    ) {
      throw new Error('invalid email')
    }
  }

  private async validateIfUserIsDuplicated(email: string) {
    const retrieveUser = await this.repository.findByEmail(email)

    if (retrieveUser) throw new Error('invalid email')
  }

  private validateUserAge(birthDate: Date) {
    if (calculateUserAge(birthDate) < 18) throw new Error('invalid birthdate')
  }

  private validatePassowordLegth(password: string) {
    if (password.length < 8) throw new Error('password must be 8 characters')
  }
}
