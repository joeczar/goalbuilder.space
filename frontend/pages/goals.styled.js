import styled from 'styled-components';

const StyledGoals = styled.div`
    height: 100%;
    width: 100%;

    header {
        flex-shrink: 0;

        margin: 0rem auto;
    }
    .goals-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 70%;
        flex-wrap: wrap;
    }
    .cardGoal {
        margin: 1em;
    }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        
        .cardGoal {
            margin: 1em 0em;
        }
    }
`;

export default StyledGoals;
