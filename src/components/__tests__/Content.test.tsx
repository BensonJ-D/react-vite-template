import React from 'react';
import { test, expect, vi } from 'vitest';
import { Content } from '../Content';
import * as ReactQuery from 'react-query';
import { screen, render } from '@testing-library/react';

test('should render api response', async() => {
  vi
    .spyOn(ReactQuery, 'useQuery')
    .mockImplementation(
      vi
        .fn()
        .mockReturnValue({ data: [{ title: 'Mock title' }], isLoading: false, isSuccess: true })
    );

  render(<Content />);

  const element = await screen.findByText(/Mock title/);
  expect(element).toBeInTheDocument();
});
