import gql from "graphql-tag";

const CATEGORY_GOALS_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      title
      goals {
        id
        Title
        Body
        categories {
          id
          title
        }
      }
    }
  }
`;

export default CATEGORY_GOALS_QUERY;
