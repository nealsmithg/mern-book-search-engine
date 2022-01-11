const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    ling: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    password: String!
    savedBooks: [Book]
  }

  type Query {
    getSingleUser: User
    login: User
  }

  type Mutation {
    createUser(username: String!, password: String!): User
    saveBook(_id: String!, bookId: String!): User
    deleteBook(_id: String!, bookId: String!): User
  }
`;

module.exports = typeDefs;
