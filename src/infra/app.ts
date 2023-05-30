import fastify, { FastifyReply, FastifyRequest } from 'fastify'

const app = fastify()

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.send({ message: 'hello world' })
})

export { app }
