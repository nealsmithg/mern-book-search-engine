const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: Array
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
`;

module.exports = typeDefs;
