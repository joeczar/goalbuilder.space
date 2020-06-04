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
    .goalDates {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: ${({ theme }) => theme.secondaryLight};
        padding: 0.25em 1em;
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
    .evidence-media {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        display: contents;
        margin: 0px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        .evidenceImg {
            width: 100%;
        }
    }
`;
export default GoalStepStyled;