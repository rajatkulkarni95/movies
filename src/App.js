import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./components/global-style";
import { Navbar } from "./components/navigation-bar";
import { Header } from "./components/header";
import { Routes } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Navbar />
        <Routes />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 1152px;
  height: 100%;
  margin: 0 auto;
`;

export default App;
