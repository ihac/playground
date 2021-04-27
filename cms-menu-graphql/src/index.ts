import { ApolloServer } from "apollo-server";
import traySchema from "./schema/menu.js";
import { CMSAPI } from "./api/cms-geccomp.js";

const resolvers = {
  Query: {
    menu: async (_parent: any, _args: any, context: any) => {
      return context.dataSources.cmsAPI.getMenu();
    },
  },
};

const server = new ApolloServer({
  typeDefs: [traySchema],
  resolvers,
  dataSources() {
    return {
      cmsAPI: new CMSAPI(),
    };
  },
  context({ req }) {
    return {
      rawHeaders: { ...req.headers },
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
