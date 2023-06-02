import { app } from './app'
import { env } from './env'

async function main() {
  await app.listen({ host: '0.0.0.0', port: env.API_PORT })

  console.log(`server started. port ${env.API_PORT}`)
}

main()
