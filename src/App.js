import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Main from '@pages/Main';
import theme from '@commons/theme';

import { Provider } from 'react-redux';
import configureStore from '@store';

function App() {
  const Store = configureStore();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={Store}>
        <Main />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
