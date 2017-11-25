import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const IdolsList = ({ data: { loading, error, idols } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <ul>
        {
          idols.map(idol => (
            <li key={idol.id}>{idol.name}, {idol.group.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

const idolsListQuery = gql`
  query {
    idols {
      id
      name
      group {
        name
      }
    }
  }
`

export default graphql(idolsListQuery)(IdolsList);
