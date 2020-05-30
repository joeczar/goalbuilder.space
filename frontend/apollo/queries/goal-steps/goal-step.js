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
      evidence
      evidenceMedia {
        url
      }
      verification
      verificationMedia {
        url
        alternativeText
        caption
      }
      verified
      verificationDate
      complete
      completionDate
    }
  }
`;
export default GOALSTEP_QUERY;
