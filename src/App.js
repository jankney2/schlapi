import React, { useEffect } from "react";
import gql from "gql-tag";
import { useQuery, ApolloProvider, useApolloClient }  from "@apollo/react-hooks";
import "./App.css";

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

const c2=useApolloClient()

function App() {

  const {loading, err, data}=useQuery(getAll)
  const getAll = gql`
    {
      characters(page: 1, filter: { name: "rick" }) {
        results {
          name
          status
          image
        }
      }
    }
  `;

  useEffect(() => {

  }, []);

  if(err){
    return(
      <div>error</div>
    )
  }
  if(loading){
    return(
      <div>loading</div>
    )
  }
  if(data){
    return(
      <div>data</div>
    )
  }

  return (
    <ApolloProvider client={client}>



    </ApolloProvider>
  );
}



export default App;
