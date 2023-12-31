import type { CreateUserProps } from '@/modules/users/domain/schemas'

export const createUserMock = (props?: Partial<CreateUserProps>) => ({
  name: 'john',
  email: 'john@mail.com',
  password: 'abcd1234',
  birthDate: new Date('2000-01-01'),

  ...props,
})
