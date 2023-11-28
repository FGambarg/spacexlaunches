import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

import Env from './env';

const createApolloClient = () => {
  return new ApolloClient({
    uri: Env.spacex.graphql.uri,
    cache: new InMemoryCache({
      typePolicies: {
        Launch: {
          fields: {
            feed: offsetLimitPagination(),
          },
        },
      },
    }),
  });
};

export default createApolloClient;
