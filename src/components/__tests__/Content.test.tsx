import React, { ReactNode } from 'react';
import { test, expect } from 'vitest';
import { Content } from '../Content';
import { screen, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import nock from 'nock';
import axios from 'axios';

const queryClient = new QueryClient();
axios.defaults.adapter = 'http';

const TestQueryWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

test('should render api response', async () => {
  const apiMock = nock('https://api.sampleapis.com').get('/coffee/hot').reply(200,
    [{ title: 'Mock title' }]
  );

  render(
    <TestQueryWrapper>
      <Content />
    </TestQueryWrapper>);

  const element = await screen.findByText(/Mock title/);
  expect(element).toBeInTheDocument();

  apiMock.done();
});
