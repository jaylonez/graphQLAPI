import express from 'express';
import bodyParser from 'body-parser';
import graphqlPlayground from 'graphql-playground-middleware-express';
import helmet from 'helmet';
import { ApolloServer, gql } from 'apollo-server-express';
import initKnex from './db';
import schema from './schema';
// import loadRoutes from './routes';

const app = express();

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

  // // Load routes
  // loadRoutes(app, context);

  return { app, context, apolloServer };
}

init()
  .then(({ app }) => {
    app.listen(port, () => {
      console.log('ERROR!');
    });
  })
  .catch(err => {
    // Won't contain any other error than during the configuration time
    // tslint:disable-next-line:no-console
    console.error('config', err);
  });
