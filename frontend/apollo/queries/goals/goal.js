import gql from "graphql-tag";

const GOAL_QUERY = gql`
  query Goal($id: ID!) {
    goal(id: $id) {
      id
        title
      createdAt
      description
        body
        startDate
        completed
        completionDate
        
        categories {
          id
          title
        }
            goal_steps{
          id
          step
          complete
          title
          description
        }
        completed
      completionDate
        updatedAt
      }
    }
`;

export default GOAL_QUERY;
