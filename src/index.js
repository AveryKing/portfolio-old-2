import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


