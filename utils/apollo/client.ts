import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://ex-graph.kardiachain.io/subgraphs/name/kai/exchange-v2",
  }),
  cache: new InMemoryCache(),
});
