import gql from "graphql-tag";

const CATEGORY_GOALS_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      title
      goals {
        id
        title
        body
        categories {
          id
          title
        }
        image {
          url
        }
      }
    }
  }
`;

export default CATEGORY_GOALS_QUERY;
