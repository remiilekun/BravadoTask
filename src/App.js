import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@emotion/react';
import Router from '@router';
import theme from '@theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
