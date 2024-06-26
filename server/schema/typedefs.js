const typedefs = `
  type Kitty {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    username: String
    password: String
  }

  type AuthUser {
    _id: ID
    username: String
    token: String
  }

  type Query {
    kitty: [Kitty]
    users: [User]
  }

  type Mutation {
    addKitty(name: String!): Kitty
    addUser(username: String!, password: String!): AuthUser
    login(username: String!, password: String!): AuthUser
  }
`;

module.exports = typedefs;
