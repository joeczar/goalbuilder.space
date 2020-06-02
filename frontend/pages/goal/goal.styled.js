import styled from 'styled-components';

export const StyledGoal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em;

    header {
        background-color: ${({ theme }) => theme.secondaryDark};
        color: ${({ theme }) => theme.secondaryText};
        padding: 2em;
        z-index: 3;
    }
    .goalDates {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: ${({ theme }) => theme.secondaryLight};
        padding: 0.25em;
    }
    .goal-body {
        background-color: ${({ theme }) => theme.primaryLight};
        padding: 2em;
    }
    .goal-body a {
        color: ${({ theme }) => theme.secondaryLight};
    }
`;
