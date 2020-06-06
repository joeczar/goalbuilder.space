import styled from 'styled-components';

const GoalStepStyled = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;

    header {
        padding: 0em;
        background-color: ${({ theme }) => theme.secondaryDark};
        text-align: center;
    }
    header p {
        max-width: 50em;
        margin: auto;
        padding: 1em;
    }
    header h1 {
        margin: 0 1em;
    }
    .goalDates {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: ${({ theme }) => theme.secondaryLight};
        padding: 0.25em 1em;
    }
    .body,
    .evidence {
        background-color: ${({ theme }) => theme.primaryLight};
        padding: 2em;
        max-width: 60em;
        margin: auto auto 2em auto;
    }
    .evidence a,
    .body a {
        color: ${({ theme }) => theme.secondaryLight};
    }

    .action {
        display: block;
        color: ${({ theme }) => theme.primary};
    }
    .date {
        color: ${({ theme }) => theme.secondaryDark};
    }
    .content {
        padding: 1em;
    }
    
    .evidence ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .evidence li {
        margin-bottom: 2em;
        padding: 0.5rem;
        overflow:hidden;
        background-color: ${({ theme }) => theme.primaryDark}
    }
    .evidenceImg {
        width: 100%;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        .evidenceImg {
            width: 100%;
        }
    }
`;
export default GoalStepStyled;