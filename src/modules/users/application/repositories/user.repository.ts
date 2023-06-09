import type { UserEntity } from '../../domain/entities'
import type { CreateUserProps } from '../../domain/schemas'

export type UserRepository = {
  create(userData: CreateUserProps): Promise<UserEntity>
}
