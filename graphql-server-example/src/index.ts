import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
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

const reviews = [
  {
    book: "The Awakening",
    rating: 3.9,
    reviewer: "Penny",
  },
  {
    book: "The Awakening",
    rating: 4.1,
    reviewer: "Leonard",
  },
  {
    book: "One Piece",
    rating: 4.3,
    reviewer: "Yao",
  },
  {
    book: "One Piece II",
    rating: 4.9,
    reviewer: "Yuan",
  },
];

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title: "One Piece",
    author: "Luffy Xiao",
  },
  {
    title: "One Piece II",
    author: "Luffy Xiao",
  },
];

const authors = [
  {
    name: "Kate Chopin",
  },
  {
    name: "Paul Auster",
  },
  {
    name: "Luffy Xiao",
  },
];

const resolvers = {
  Author: {
    books: (parent: any) => books.filter((b) => b.author === parent.name),
  },
  Book: {
    reviews: (parent: any) => reviews.filter((r) => r.book === parent.title),
  },
  Query: {
    books: () => books,
    authors: () => authors,
    reviews: () => reviews,
    book: (parent: any, args: any, context: any, info: any) =>
      books.find((b) => b.title === args.title),
    author: (parent: any, args: any, context: any, info: any) =>
      authors.find((a) => a.name === args.name),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
