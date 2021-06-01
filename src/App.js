import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styled from '@emotion/native';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@emotion/react';
import { BookmarkProvider } from '@contexts/BookmarkContext';
import { navigationRef } from '@services/navigation';
import Router from '@router';
import theme from '@theme';

const StyledSafeArea = styled(SafeAreaProvider)`
  background-color: ${theme.colors.background};
`;

const queryClient = new QueryClient();

setLogger({
  log: console.log,
  warn: console.warn,
  error: console.warn,
});

const App = () => {
  return (
    <StyledSafeArea>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <BookmarkProvider>
              <Router />
            </BookmarkProvider>
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </StyledSafeArea>
  );
};

export default App;
