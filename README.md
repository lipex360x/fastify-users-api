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


#### file sequence

[ ] create-user.usecase.test.ts
[ ] create-user.usecase.ts
[ ] create-user.schema.ts
[ ] user-repository.ts
[ ] user.entity.ts
[ ] user-memory.repository.ts