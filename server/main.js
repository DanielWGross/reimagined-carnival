require('@dotenvx/dotenvx').config();
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const mongoose = require('mongoose');
const typeDefs = require('./schema/typedefs');
const resolvers = require('./schema/resolvers');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
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
    expressMiddleware(server, { context: authMiddleware }),
  );

  app.get('/', async (req, res) =>
    res.json({
      message: 'You are so great at everything and everyone knows it',
    }),
  );

  await mongoose.connect(
    process.env.MONGODB_URI ? process.env.MONGODB_URI : process.env.LOCAL_DB,
  );
  app.listen(PORT, () => console.log('LISTEN!'));
}

startServer();
