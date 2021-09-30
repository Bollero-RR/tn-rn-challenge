import React from 'react';
import { mockItems } from '../../utils/mockedFunctions';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClientProvider, QueryClient, useQuery } from 'react-query';

it('UseItemsQueryTest', async () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: any) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

  const { result, waitFor } = renderHook(() => useQuery('items', mockItems), { wrapper });

  expect(result.current.isLoading).toBe(true);
  expect(result.current.isError).toBe(false);
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data?.length).toBeGreaterThan(1);
  expect(result.current.isLoading).toBe(false);
  expect(result.current.isSuccess).toBe(true);
});
