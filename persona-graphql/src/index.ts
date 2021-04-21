import { ApolloServer } from "apollo-server";
import traySchema from "./schema/tray.js";
import { PersonaLayoutAPI } from "./api/persona-layout.js";

const resolvers = {
  Query: {
    compositePage: async (_parent: any, args: any, context: any) => {
      return context.dataSources.personaLayoutAPI.getCompositePage(
        args.pageId,
        { ...args.params }
      );
    },
  },
};

const server = new ApolloServer({
  typeDefs: [traySchema],
  resolvers,
  dataSources() {
    return {
      personaLayoutAPI: new PersonaLayoutAPI(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
