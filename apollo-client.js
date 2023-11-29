import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { createFragmentRegistry } from '@apollo/client/cache';

import { LAUNCH_CORE_FIELDS } from './src/services/graphql/fragments';
import Env from './env';

const createApolloClient = () => {
  return new ApolloClient({
    uri: Env.spacex.graphql.uri,
    cache: new InMemoryCache({
      fragments: createFragmentRegistry(LAUNCH_CORE_FIELDS),
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
