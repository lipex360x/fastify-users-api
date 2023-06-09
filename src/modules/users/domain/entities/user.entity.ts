import { randomUUID } from 'node:crypto'

import type { CreateUserProps } from '../schemas'

export class UserEntity {
  id: string = randomUUID()

  constructor(userData: CreateUserProps) {}
}
