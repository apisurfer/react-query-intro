import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 5, // 5 min
      // retryDelay: 0,
      refetchOnWindowFocus: true,
    },
  },
});
