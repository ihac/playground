import { ApolloServer } from "apollo-server";
import { typeDef as bookSchema } from "./schema/book.js";
import { books, authors, reviews } from "./mock/book.js";

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
    book: (parent: any, args: any) => books.find((b) => b.title === args.title),
    author: (parent: any, args: any) =>
      authors.find((a) => a.name === args.name),
  },
};

const server = new ApolloServer({ typeDefs: [bookSchema], resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
