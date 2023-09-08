/// <reference path="../global.d.ts" />
import fastifyOauth2 from "@fastify/oauth2";
import { FastifyInstance } from "fastify";
import fp from 'fastify-plugin';

async function plugin(app: FastifyInstance) {
  app.register(fastifyOauth2, {
    name: 'keycloak',
    callbackUri: '/hello',
    credentials: {
      client: {
        id: (app as any).config.KEYCLOAK_ID,
        secret: (app as any).config.KEYCLOAK_SECRET
      },
      auth: {
        tokenHost: (app as any).config.KEYCLOAK_HOST
      },
    }
  })
}

export default fp(plugin, {
  decorators: {
    fastify: ['config']
  }
})