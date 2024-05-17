const { Kitten, User } = require('../models');

const resolvers = {
  Query: {
    async kitty() {
      const kitty = await Kitten.find();

      return kitty;
    },
    async users() {
      return User.find();
    },
  },
  Mutation: {
    async addKitty(_, args) {
      const kitty = await Kitten.create({
        name: args.name,
      });

      return kitty;
    },
    async addUser(_, args) {
      return User.create(args);
    },
  },
};

module.exports = resolvers;
