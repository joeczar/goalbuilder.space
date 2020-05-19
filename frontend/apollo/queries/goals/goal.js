import gql from "graphql-tag";

const GOAL_QUERY = gql`
  query Goal($id: ID!) {
    goal(id: $id) {
        id
        Title
      created_at
      Description
        Body
        StartDate
        Completed
        CompletionDate
        
        categories {
          id
          title
        }
            goal_steps{
          StepID
          StepNumber
          Title
          Description
        }
          CompletionDate
        updated_at
      }
    }
`;

export default GOAL_QUERY;
