require('@dotenvx/dotenvx').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const mongoose = require('mongoose');
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

  await mongoose.connect('mongodb://127.0.0.1:27017/carnival');
  app.listen(PORT, () => console.log('LISTEN!'));
}

startServer();
