import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import theme from "./styles/theme";

// #STYLES
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import variables from "./styles/variables";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme, ...variables }}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
