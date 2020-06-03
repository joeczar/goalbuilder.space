import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display:flex;
    flex-direction:column;
    color: ${({ theme }) => theme.primaryText};
    background: ${({ theme }) => theme.primary};
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  #__next{
    margin:auto;
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    justify-content: space-around;
  }
  #homeWrapper {
    display: flex;
    flex-direction: column;
    margin: auto;
    flex: 8 0 auto;
    
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  h1, h2, h3, h4, h5, h6 {
    ${({ theme }) => theme.primaryText};
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    
  }
  small {
    display: block;
    
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
  }
  li {
    
  }
  .uppercase {
    text-transform: uppercase;
  }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    .container {
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
      
    }

    main {
      padding: 0;
      width: 100vw;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
    }
    header {
      margin: -0.5rem 0 0 0rem;
      background: ${({ theme }) => theme.primaryDark};
      padding: 0.25rem;
    }

    #about {
      margin:3rem;
    }
    footer {
      flex-shrink: 0;
    }
    .shadow {
      -webkit-box-shadow: 5px 10px 23px -15px rgba(0,0,0,0.75);
      -moz-box-shadow: 5px 10px 23px -15px rgba(0,0,0,0.75);
      box-shadow: 5px 10px 23px -15px rgba(0,0,0,0.75);
    }
    .site-title {
      color: ${({ theme }) => theme.primaryText})!important;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      max-width: 100vw;
      __next,
      main,
      #homeWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        max-width: 100vw;
    }

      .container{
        width: 100vw;
       
      }
      .description {
        padding: 0rem 2rem;
        margin: 0px;
      }
      .welcome {
        padding: 1em;
        margin: 3em 0em 0em 0em;
      }
    }
    
`;
