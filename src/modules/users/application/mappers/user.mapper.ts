import { calculateUserAge } from '@/core/helpers'

import type { UserEntity } from '../../domain/entities'

export class UserMapper {
  fromDatabaseToDomain(userData: UserEntity) {
    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      birthDate: userData.birthDate,
      age: calculateUserAge(userData.birthDate),
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt,
    }
  }
}
