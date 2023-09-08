import { FastifyInstance } from "fastify";
import fp from 'fastify-plugin';
import S from 'fluent-json-schema';

const EnvSchema: { [key: string]: any } = S.object()
  .prop('KEYCLOAK_ID', S.string().required())
  .prop('KEYCLOAK_SECRET', S.string().required())
  .prop('KEYCLOAK_HOST', S.string().format('uri').required());

async function plugin(app: FastifyInstance) {
  app.register(require('@fastify/env'), {
    schema: EnvSchema
  });
}

export default fp(plugin, {
  name: 'config-plugin'
});