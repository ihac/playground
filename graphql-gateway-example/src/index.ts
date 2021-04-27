import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import { readFileSync } from "fs";

const supergraphSchema = readFileSync(
  "src/schema/supergraph.graphql"
).toString();

const gateway = new ApolloGateway({
  supergraphSdl: supergraphSchema,
});

const server = new ApolloServer({
  gateway,
  // Subscriptions are not currently supported in Apollo Federation
  subscriptions: false,
});

server
  .listen({ port: 4040 })
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
