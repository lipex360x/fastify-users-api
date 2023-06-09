import type { UserRepository } from '@/modules/users/application/repositories'
import { CreateUserUseCase } from '@/modules/users/application/usecases'
import { UserMemoryRepository } from '@/modules/users/infra/repositories/memory'
import { createUserMock } from '@test/unit/@mocks'

let repository: UserRepository
let usecese: CreateUserUseCase

describe('CreateUserUseCase', () => {
  beforeAll(() => {
    repository = new UserMemoryRepository()
    usecese = new CreateUserUseCase(repository)
  })

  it('should create a user', async () => {
    const userData = createUserMock({ name: 'doe' })

    const { user } = await usecese.execute(userData)

    expect(user).toHaveProperty('id')
  })
})
