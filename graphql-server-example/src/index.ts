import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String!
    author: Author!
  }

  type Author {
    name: String!
    books: [Book!]
  }

  type Query {
    books: [Book!]
    authors: [Author!]
    bookByTitle(title: String!): Book
    author(name: String!): Author
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    title: "One Piece",
    author:  "Luffy Xiao",
  },
  {
    title: "One Piece II",
    author:"Luffy Xiao",
  },
];

const authors = [
  {
    name: 'Kate Chopin',
  },
  {
    name: 'Paul Auster',
  },
  {
    name: 'Luffy Xiao',
  },
]

const resolvers = {
  Author: {
    books: (parent: any) => books.filter(b => b.author === parent.name)
  },
  Query: {
    books: () => books,
    authors: () => authors,
    bookByTitle: (parent: any, args: any, context: any, info: any) => books.find(b => b.title === args.title),
    author: (parent: any, args: any, context: any, info: any) => authors.find(a => a.name === args.name),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});