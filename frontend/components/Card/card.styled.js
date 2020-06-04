import styled from 'styled-components';

export const StyledCard = styled.div`
           margin: 0 0 2rem 0;
           padding: 0rem;
           background: ${({ theme }) => theme.primaryLight};
           color: ${({ theme }) => theme.primaryText};
           display: flex;
           flex-direction: column;
           min-width: 22em;
           min-height: 15em;
           -webkit-box-shadow: 5px 10px 23px -15px rgba(0, 0, 0, 0.75);
           -moz-box-shadow: 5px 10px 23px -15px rgba(0, 0, 0, 0.75);
           box-shadow: 5px 10px 23px -15px rgba(0, 0, 0, 0.75);

           h1 {
               color: ${({ theme }) => theme.primaryText};
           }
           a {
               color: ${({ theme }) => theme.primaryText} !important;
               cursor: pointer;
           }

           .card-categories {
               background: ${({ theme }) => theme.secondary};
               margin: 0rem;
               color: ${({ theme }) => theme.secondaryText};

               padding: 0.1rem 0em;
           }
           .card-categories ul {
               list-style-type: none;
               margin-left: -2em;

               display: flex;
               flex-direction: row;
           }
           .category-title {
               margin-right: 0.5em;
               background-color: ${({ theme }) => theme.secondaryLight};
               padding: 0.25em;
               -webkit-border-radius: 5px;
               -moz-border-radius: 5px;
               border-radius: 5px;
           }
           .card-body {
               padding: 0 1rem 1rem 1rem;
           }
       `;
