import gql from 'graphql-tag'

const GET_ALL_USERS_QUERY = gql`
  query MyQuery {
  allPassengers {
    edges {
      node {
        id
        assistance
        bio
        firstName
      }
    }
  }
}
`;
// }

export { GET_ALL_USERS_QUERY};
