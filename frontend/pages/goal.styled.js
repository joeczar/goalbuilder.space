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
        z-index: 3;
    }
    article {
        min-height: 500px;
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
    .stepList {
        list-style-type: none;
        margin-left: -2.6rem;
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