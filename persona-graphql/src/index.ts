import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import traySchema from "./schema/tray.js";
import { PersonaLayoutAPI } from "./api/persona-layout.js";

const resolvers = {
  Query: {
    compositePage: async (_parent: any, args: any, context: any) => {
      return context.dataSources.personaLayoutAPI.getCompositePage(
        args.pageId,
        { ...args.param },
        args.nextPage
      );
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs: traySchema, resolvers }]),
  dataSources() {
    return {
      personaLayoutAPI: new PersonaLayoutAPI(),
    };
  },
  context({ req }) {
    return {
      rawHeaders: { ...req.headers },
    };
  },
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
