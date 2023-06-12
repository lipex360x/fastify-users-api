[X] fastify
[X] typescript
[X] eslint + prettier
[X] jest
[X] husky
[X] ncu

---

#### folders

```bash
# module
MODULE=users && \

# tests
mkdir -p test/unit/@mocks && touch $_/index.ts && \
mkdir -p test/unit/modules/${MODULE}/usecases && \

# aplication
mkdir -p src/modules/${MODULE}/application/mappers && touch $_/index.ts && \
mkdir -p src/modules/${MODULE}/application/repositories && touch $_/index.ts && \
mkdir -p src/modules/${MODULE}/application/usecases && touch $_/index.ts && \

# domain
# mkdir -p src/modules/${MODULE}/domain/constants && touch $_/index.ts && \
mkdir -p src/modules/${MODULE}/domain/entities && touch $_/index.ts && \
mkdir -p src/modules/${MODULE}/domain/schemas && touch $_/index.ts && \

# infra
# mkdir -p src/modules/${MODULE}/infra/controllers && touch $_/index.ts && \
# mkdir -p src/modules/${MODULE}/infra/routes && touch $_/index.ts && \
# mkdir -p src/modules/${MODULE}/infra/repositories/prisma && touch $_/index.ts && \
mkdir -p src/modules/${MODULE}/infra/repositories/memory && touch $_/index.ts && \

echo "done"
```

---

#### create part 1: file sequence

[X] create: create-user.usecase.test.ts
[X] create: create-user.schema.ts
[X] create: create-user.usecase.ts
[X] create: user-repository.ts
[X] create: user.entity.ts
[X] create: user-memory.repository.ts
[X] create: create-user.mock.ts

#### create part 2: file sequence

[ ] update: create-user.usecase.test.ts
  * should not create a user with invalid e-mail
  * should not create a user with duplicated email
  * should not register underage user
  * should not register user if password is less than 8 characters
  * should save user with an encrypted password
  * should return a valid user payload

[ ] update: user-repository.ts
[ ] update: user-memory.repository.ts
[ ] create: calculate-user-age.helper.ts
[ ] create: base-entity.ts
[ ] update: user-entity.ts
[ ] create: user.mapper.ts
[ ] update: jest.config.ts
