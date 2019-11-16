import React, { Component } from 'react';
import logo from './logo.svg';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const passengers = gql`
query {
  passengerById(id: 1) {
    firstName
  }
}
`
function App() {
  const { data, loading } = useQuery(passengers)

  if (loading) {
    return <p>...loading</p>
  }
  return (
    <div className="content-center">
      {JSON.stringify(data.passengerById)}
    </div>
  );
}

export default App;
