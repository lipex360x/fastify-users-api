import type { CreateUserProps } from '../../domain/schemas'
import type { UserRepository } from '../repositories'

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(userData: CreateUserProps) {
    const user = await this.repository.create(userData)

    return { user }
  }
}
