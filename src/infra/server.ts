import { app } from './app'

async function main() {
  await app.listen({ host: '0.0.0.0', port: 3333 })

  console.log('server started')
}

main()
