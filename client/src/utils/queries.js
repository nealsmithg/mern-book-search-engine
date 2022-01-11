import { gql } from "@apollo/client";

export const QUERY_GET_SINGLE_USER = gql`
  query getSingleUser {
    gitSingleUser {
      _id
      username
    }
  }
`;

export const QUERY_LOGIN = gql`
  query login {
    login {
      _id
      username
    }
  }
`;
