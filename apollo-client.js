import { ApolloClient, InMemoryCache } from "@apollo/client";

import Env from "./env";

const createApolloClient = () => {
  return new ApolloClient({
    uri: Env.spacex.graphql.uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
