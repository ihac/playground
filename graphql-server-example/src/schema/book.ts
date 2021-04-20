import { gql } from "apollo-server";

export const typeDef = gql`
  type Book {
    title: String!
    author: Author!
    reviews: [Review!]
  }

  type Author {
    name: String!
    books: [Book!]
  }

  type Review {
    book: String!
    rating: Float!
    reviewer: String!
  }

  type Query {
    books: [Book!]
    authors: [Author!]
    reviews: [Review!]

    book(title: String!): Book
    author(name: String!): Author
  }
`;
