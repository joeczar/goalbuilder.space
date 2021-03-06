import gql from 'graphql-tag';

const GOAL_QUERY = gql`
    query Goal($id: ID!) {
        goal(id: $id) {
            id
            title
            createdAt
            description
            body
            started
            dateStarted
            complete
            completionDate

            categories {
                id
                title
            }
            goal_steps {
                id
                step
                started
                dateStarted
                complete
                completionDate
                verified
                verificationDate
                title
                description
            }

            updatedAt
        }
    }
`;

export default GOAL_QUERY;
