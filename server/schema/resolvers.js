const jwt = require('jsonwebtoken');
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
      const user = await User.create(args);

      const token = jwt.sign(
        { username: user.username, _id: user._id },
        process.env.SECRET,
      );

      return {
        _id: user._id,
        username: user.username,
        token,
      };
    },
  },
};

module.exports = resolvers;
