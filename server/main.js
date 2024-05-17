const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const typeDefs = require('./schema/typedefs');
const resolvers = require('./schema/resolvers');

const PORT = process.env.PORT || 5309;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();

  app.use(
    '/graphql',
    express.urlencoded({ extended: false }),
    express.json(),
    expressMiddleware(server),
  );

  app.get('/', async (req, res) =>
    res.json({
      message: 'You are so great at everything and everyone knows it',
    }),
  );

  app.listen(PORT, () => console.log('LISTEN!'));
}

startServer();
