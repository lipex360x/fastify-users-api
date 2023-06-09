import type { UserRepository } from '@/modules/users/application/repositories'
import { UserEntity } from '@/modules/users/domain/entities'
import type { CreateUserProps } from '@/modules/users/domain/schemas'

export class UserMemoryRepository implements UserRepository {
  users: UserEntity[] = []

  async create(userData: CreateUserProps) {
    const user = new UserEntity(userData)

    this.users.push(user)

    return user
  }
}
