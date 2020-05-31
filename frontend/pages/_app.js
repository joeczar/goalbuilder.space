import React, { useState, useRef } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { useOnClickOutside } from "../hooks/hooks";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { theme } from "../theme";
import { Burger, Menu } from "../components";

import FocusLock from "react-focus-lock";

const App = ({ Component, pageProps, apollo }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Head>
            <title>GoalBuilder.Space</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <Component {...pageProps} />
          <footer>
            <small>
              © 2020 <a href="https://rollercoaster.dev">Rollercoaster.dev </a>
            </small>
          </footer>
        </>
      </ThemeProvider>
    </ApolloProvider>
  );
};

// Wraps all components in the tree with the data provider
export default withData(App);
