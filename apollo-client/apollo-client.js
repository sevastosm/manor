import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api-eu-west-2.hygraph.com/v2/claasat4934g001t506an88h4/master",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjgwNjkxMDYsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xhYXNhdDQ5MzRnMDAxdDUwNmFuODhoNC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWM2ZjQwZmEtNWQ2Ny00Nzc0LTk5MzAtODdiMzMzMDE0Njc3IiwianRpIjoiY2xhYXQ5enQ0MzNqdzAxdGYxMDZ0YzBpNiJ9.TGPIuGmqubk60sHK8__c_yHRStvXXaLgrPwpW3Td20cQMvwwjLZfAtYI21Dgx202xMLwSO075boavUOfKjTxPesoTQL5G5L3Nl3jfiUEJdwh0NmfG018plRYfEUjz623Owj6dfF73IlDBF5UVwj7YqDJ154TMlwKhADNdyDMKqaRDbk9_Fji5jHeRHJVDPA4vfa-g-It9bFOoXxTyw5QVn-LuCm6jpShh4RTpu5gE7ChMJusi921l2bOVbUrD8nzZ-RNheST1oKwR99XXpF3gjfqLNg-p7gDXfPolrJnt1KzrUWTII2Yrx5ncZprIhMgRL_mZaIfYb2yyEZwDRJTF7qoKX8SkXyT1uWtPJawCDorYbW5r9aFyzzFHRyfBNXnXh7c86Q6w6CSMcmqV_5gqEUTlRSbu3LwpVH2ITdC8kyQWb-e0_RRcHOJwbPkXpG9HtpwWkS11bfoHshm1Ri1qdnRzRhilUJAMhaNDwt_65WUpA4QKlFb5b6ZynhxgTyp47ML_8l6ciUt6Zj1ptM4tKi1uhzz3bEXTTW5l4rz6D0EzlKVSQPqzp2ExZ_NXOMqIGzGt86PHZX9ipMxLcHgUnie7nqK2oPKsRWOR60oWmvyu3pDWjMJI8kiIcJZTp9vgM8n-VSFeql-TWBjZ5HBWZr9fVhKdYF6wyXNGv2NOeA`;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client;
