import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Hello</div>
    </ThemeProvider>
  );
}

export default App;
