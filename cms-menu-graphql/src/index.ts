import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import menuSchema from "./schema/menu.js";
import { CMSAPI } from "./api/cms-geccomp.js";

const resolvers = {
  Query: {
    menu: async (_parent: any, _args: any, context: any) => {
      return context.dataSources.cmsAPI.getMenu();
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs: menuSchema, resolvers }]),
  introspection: true,
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

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
