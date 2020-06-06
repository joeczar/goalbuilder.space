import styled from 'styled-components';

const StyledGoal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em;
    height: 100%;

    header {
        background-color: ${({ theme }) => theme.secondaryDark};
        color: ${({ theme }) => theme.primaryText};
        padding: 0;
        text-align: center;
       
    }
    article {
        min-height: 500px;
    }
    .goalDates {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: ${({ theme }) => theme.secondaryLight};
        padding: 0.25em;
    }
    
    .goal-body {
        background-color: ${({ theme }) => theme.primaryLight};
        padding: 2em;
        max-width: 60em;
        margin: auto;
    }
    .goal-body a {
        color: ${({ theme }) => theme.secondaryLight};
    }

    
    .action {
        display: block;
        color: ${({ theme }) => theme.primary};
    }
    .date {
        color: ${({ theme }) => theme.secondaryDark};
    }
`;
export default StyledGoal;