/// <reference path="./global.d.ts" />
import auto from '@fastify/autoload'
import { FastifyInstance } from 'fastify'

export default async function (app: FastifyInstance) {
  app.register(auto, {
    dir: './plugins'
  })
}
