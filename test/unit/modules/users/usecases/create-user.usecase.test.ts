import timekeeper from 'timekeeper'

import { UserMapper } from '@/modules/users/application/mappers'
import type { UserRepository } from '@/modules/users/application/repositories'
import { CreateUserUseCase } from '@/modules/users/application/usecases'
import { UserMemoryRepository } from '@/modules/users/infra/repositories/memory'
import { createUserMock } from '@test/unit/@mocks'

let repository: UserRepository
let mapper: UserMapper
let usecese: CreateUserUseCase

describe('CreateUserUseCase', () => {
  beforeAll(() => {
    timekeeper.freeze(new Date('2020-01-01 00:00:00'))
  })

  afterAll(() => {
    timekeeper.reset()
  })

  beforeEach(() => {
    repository = new UserMemoryRepository()
    mapper = new UserMapper()
    usecese = new CreateUserUseCase(repository, mapper)
  })

  it('should create a user', async () => {
    const userData = createUserMock()

    const { user } = await usecese.execute(userData)

    expect(user).toHaveProperty('id')
  })

  it('should not create a user with invalid e-mail', async () => {
    const userData = createUserMock({ email: 'invalid email' })

    const usecaseOnFail = usecese.execute(userData)

    await expect(usecaseOnFail).rejects.toThrow(new Error('invalid email'))
  })

  it('should not create a user with duplicated email', async () => {
    const userData = createUserMock()

    await repository.create(userData)

    const usecaseOnFail = usecese.execute(userData)

    await expect(usecaseOnFail).rejects.toThrow(new Error('invalid email'))
  })

  it('should not register underage user', async () => {
    const userData = createUserMock({ birthDate: new Date('2015-01-01') })

    const usecaseOnFail = usecese.execute(userData)

    await expect(usecaseOnFail).rejects.toThrow(new Error('invalid birthdate'))
  })

  it('should not register user if password is less than 8 characters', async () => {
    const userData = createUserMock({ password: '1234' })

    const usecaseOnFail = usecese.execute(userData)

    await expect(usecaseOnFail).rejects.toThrow(
      new Error('password must be 8 characters'),
    )
  })

  it('should save user with an encrypted password', async () => {
    const password = 'aaaa1234'
    const userData = createUserMock({ password })

    await usecese.execute(userData)

    const getUserFromDatabase = await repository.findByEmail(userData.email)
    expect(getUserFromDatabase?.password).not.toEqual(password)
  })

  it('should return a valid user payload', async () => {
    const userData = createUserMock()

    const { user } = await usecese.execute(userData)

    expect(user).not.toHaveProperty('password')
    expect(user).toHaveProperty('age')
  })
})
