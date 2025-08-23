"use client";

import useSWR from 'swr';
import { client } from '@/sanity/lib/client';

export type SanityQuery = string;

const fetcher = async (query: SanityQuery) => {
  const res = await client.fetch(query);
  return res;
};

export function useSanityData<T = any>(query: SanityQuery, options?: {
  refreshInterval?: number;
  revalidateOnFocus?: boolean;
}) {
  const { data, error, isValidating } = useSWR<T>(query, fetcher, {
    revalidateOnFocus: options?.revalidateOnFocus ?? false,
    refreshInterval: options?.refreshInterval ?? 0,
    dedupingInterval: 60000,
  });

  return {
    data,
    error,
    isLoading: !error && !data && isValidating,
    isValidating,
  };
}
