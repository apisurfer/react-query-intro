import { fetchExistingUser } from "./fetchers";
import { selectUserData } from "./selectors";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { cacheKey } from "./cacheKey";

type Options = Pick<UseQueryOptions, "suspense">;

export const useFetchUser = (userId?: number, options?: Options) => {
  return useQuery(cacheKey.userById(userId), fetchExistingUser, {
    ...options,
    enabled: Boolean(userId),
    select: (data) => {
      if (!data) return data;

      if (Array.isArray(data)) {
        return data.map(selectUserData);
      }

      return selectUserData(data);
    },
  });
};
