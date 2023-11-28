import Head from 'next/head';
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
      <Head>
        <title>SpaceX Launches</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </ApolloProvider>
  );
};
