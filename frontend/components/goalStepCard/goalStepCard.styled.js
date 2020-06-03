import styled from 'styled-components';

export const StyledStepCard = styled.div`
           background-color: ${({ theme }) => theme.primaryLight};
           text-align: center;

           .card-body {
               color: ${({ theme }) => theme.primaryText};
           }
           .goalDates {
               color: ${({ theme }) => theme.primaryDark};
               
           }
       `;
