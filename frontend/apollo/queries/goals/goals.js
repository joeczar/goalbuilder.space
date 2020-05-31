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
      createdAt
      description
      
      dateStarted
      verified
      verificationDate
      complete
      completionDate
      started
    }
  }
`;

export default GOALS_QUERY;
