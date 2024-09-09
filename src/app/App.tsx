import React from 'react';
import { ThemeProvider } from '@mui/material';
import Theme from '../themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Content } from '../components/Content';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme.Light}>
        <Content />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
