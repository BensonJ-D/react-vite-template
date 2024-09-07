import type { GlobalProvider } from "@ladle/react";
import Theme from '../src/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

export const Provider: GlobalProvider = ({
  children,
  storyMeta,
}) => {
  const queryClient = new QueryClient();

  return (<>
    <h1>{storyMeta?.title}</h1>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={Theme.Light}>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </>);
};

