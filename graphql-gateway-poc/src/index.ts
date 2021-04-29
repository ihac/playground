import { ApolloServer } from "apollo-server";
import {
  ApolloGateway,
  RemoteGraphQLDataSource,
  GraphQLDataSource,
} from "@apollo/gateway";
import { readFileSync } from "fs";

const supergraphSchema = readFileSync(
  "src/schema/supergraph.graphql"
).toString();

class MyDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }: any) {
    request.http.headers.set(
      "x-hs-usertoken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1bV9hY2Nlc3MiLCJleHAiOjE2MTg4MzYwNjgsImlhdCI6MTYxODgzNTc2OCwiaXNzIjoiVFMiLCJqdGkiOiI0OTk2M2YxNmI1NDk0ZWI0YTVhNDdhYjE0NjViZWYwZiIsInN1YiI6IntcImhJZFwiOlwiOWYzMzI2MTljZGI4NDYyOTlkNTgzOTY0NDE3ZGI3ZDRcIixcInBJZFwiOlwiOTZjNjY1NjcxYTJiNGY3Y2E4MzY4MjVkNDBkMjM3NzZcIixcIm5hbWVcIjpcIkd1ZXN0IFVzZXJcIixcImlwXCI6XCIxMTQuMjUzLjI0LjE5OFwiLFwiY291bnRyeUNvZGVcIjpcImluXCIsXCJjdXN0b21lclR5cGVcIjpcIm51XCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc1Bob25lVmVyaWZpZWRcIjpmYWxzZSxcImRldmljZUlkXCI6XCJjMTNlNDc5Yi0zYWIxLTQ5OTUtOTA0MS1lNzVhNmIxODQwY2FcIixcInByb2ZpbGVcIjpcIkFEVUxUXCIsXCJ2ZXJzaW9uXCI6XCJ2MlwiLFwic3Vic2NyaXB0aW9uc1wiOntcImluXCI6e319LFwiaXNzdWVkQXRcIjoxNjE4ODM1NzY4NDQyfSIsInZlcnNpb24iOiIxXzAifQ._Y5OrDKdqSVZDoJDrmH31HDbz4pVFbtD6-zVFRK5t94"
    );
    request.http.headers.set("Accept-Language", "eng");
    request.http.headers.set("x-client-version", "1001");
    request.http.headers.set("x-country-code", "in");
    request.http.headers.set("x-subscription-code", "FREE");
    request.http.headers.set("x-platform-code", "ANDROID");
  }
}

const gateway = new ApolloGateway({
  supergraphSdl: supergraphSchema,
  buildService: ({ name, url }) => {
    return new MyDataSource({ url });
  },
});

const server = new ApolloServer({
  gateway,
  // Subscriptions are not currently supported in Apollo Federation
  subscriptions: false,
  context({ req }) {
    return {
      rawHeaders: { ...req.headers },
    };
  },
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
