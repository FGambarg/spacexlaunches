import { ApolloProvider } from '@apollo/client';

import createApolloClient from '../apollo-client';

import '../globals.css';

export default ({
  Component,
  pageProps,
}) => {
  const apolloClient = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
