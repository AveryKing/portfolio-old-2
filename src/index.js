import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {useColorMode} from "@chakra-ui/color-mode";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
      <Router>
    <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


