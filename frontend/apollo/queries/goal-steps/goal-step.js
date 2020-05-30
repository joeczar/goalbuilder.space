import gql from "graphql-tag";

const GOALSTEP_QUERY = gql`
  query Goal_Step($id: ID!) {
    goalStep(id: $id) {
      id
      title
      createdAt
      description
      dateStarted
      slug
      step
      started
      body
      evidenceMedia {
        url
      }
      verification
      verificationMedia {
        url
      }
      verified
      verificationDate
      complete
      completionDate
    }
  }
`;
