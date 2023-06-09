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
# mkdir -p src/modules/${MODULE}/application/mappers && touch $_/index.ts && \
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

[X] create-user.usecase.test.ts
[X] create-user.schema.ts
[X] create-user.usecase.ts
[X] user-repository.ts
[X] user.entity.ts
[X] user-memory.repository.ts
[X] create-user.mock.ts

