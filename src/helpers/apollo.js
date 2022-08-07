import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {GRAPHQL_API_URL} from '../consts/api';
import {createUploadLink} from 'apollo-upload-client';
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};
const uploadLink = createUploadLink({
  uri: GRAPHQL_API_URL,
});

export const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
  defaultOptions,
});