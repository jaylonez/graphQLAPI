import express from 'express';
import bodyParser from 'body-parser';
import graphqlPlayground from 'graphql-playground-middleware-express';
import helmet from 'helmet';
import { ApolloServer, gql } from 'apollo-server-express';
import initKnex from './db';
import schema from './schema';
import dotenv from 'dotenv-safe';

const app = express();
dotenv.config();

const port = process.env.PORT || 3456;

async function init() {
  const context = await initKnex();

  // Securing the app
  app.use(helmet());

  // Parse application/x-www-form-urlencoded
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  // Parse application/json
  app.use(bodyParser.json());

  app.get('/graphiql', graphqlPlayground({ endpoint: '/graphql' }));

  const apolloServer = new ApolloServer({
    context: async ({ req }) => ({
      ...context,
      req: { authorization: req.headers.authorization },
    }),
    schema,
    introspection: true,
    playground: true,
  });
  apolloServer.applyMiddleware({ app });

  return { app, context, apolloServer };
}

init()
  .then(({ app }) => {
    // @ts-ignore
    app.listen(port, (err: any) => {
      if (err) {
        console.log(err);
      }
      console.log(`running on port ${port}`);
    });
  })
  .catch(err => {
    // Won't contain any other error than during the configuration time
    console.error('config', err);
  });
