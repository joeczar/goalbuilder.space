import gql from "graphql-tag";

const GOALS_QUERY = gql`
  query goals {
    goals {
      id
      title
      categories {
        id
        title
      }
    }
  }
`;

export default GOALS_QUERY;
