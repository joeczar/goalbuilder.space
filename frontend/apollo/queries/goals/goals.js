import gql from "graphql-tag";

const GOALS_QUERY = gql`
  query goals {
    goals {
      id
      Title
      categories {
        id
        title
      }
    }
  }
`;

export default GOALS_QUERY;
