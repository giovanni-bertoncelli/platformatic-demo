import { FastifyInstance } from "fastify";
import fp from 'fastify-plugin';

async function plugin(app: FastifyInstance) {
  app.get('/hello', async (request, reply) => {
    reply.send(request.platformaticContext)
  })
}

export default fp(plugin)