import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryText};
   
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  #__next {
    
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.secondaryText};
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
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
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
    }

    main {
      padding: 5rem 0;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #about {
      margin:3rem;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      .container,
      .description {
        padding: 0rem 2rem;
        margin: 0px;
      }
      .welcome {
        padding: 1em;
        margin: 3em 0em 0em 0em;
      }
    }
    
`