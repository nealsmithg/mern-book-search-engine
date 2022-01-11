import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($username: String!, password: String!){
    createUser(username: $username, password: $password){
            _id
            username
            password
        }
    }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($_id: String!, $bookId: String!) {
    saveBook(_id: $id, bookId: $bookId) {
      _id
      bookId
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($_id: String!, $bookId: String!) {
    deleteBook(_id: $_id, bookId: $bookId) {
      _id
      bookId
    }
  }
`;
