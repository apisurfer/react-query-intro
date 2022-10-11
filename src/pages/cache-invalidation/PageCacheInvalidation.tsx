import { FC, useEffect } from "react";
import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetch } from "./fetchers";
import { queryClient } from "../../queryClient";

export const PageCacheInvalidation: FC = () => {
  const userId = 1;
  const user = useQuery(["users", "byId", userId], () =>
    fetch(`/users/${userId}`)
  );
  const engineers = useQuery(["users", "byRole", "engineer"], () =>
    fetch(`/users/?role=engineer`)
  );
  const userSearch = useQuery(["users", "byName", "richard"], () =>
    fetch(`/users/?name=richard`)
  );

  const isLoading =
    user.isLoading && engineers.isLoading && userSearch.isLoading;

  useEffect(() => {
    setTimeout(() => {
      queryClient.invalidateQueries(["users"], { exact: false });
      // queryClient.invalidateQueries(["users", "byRole", "engineer"]);
      // queryClient.refetchQueries(["users"], { exact: false });
      // queryClient.removeQueries(["users"], { exact: false });
      // queryClient.invalidateQueries({
      //   predicate: (query) => query.queryKey[0] === "users",
      // });
    }, 5000);
  }, []);

  return (
    <Box>
      <Heading as="h1">Cache invalidation</Heading>
      <Box>
        <Box my={5}>{isLoading && <Spinner />}</Box>

        <VStack mt={5} alignItems="flex-start">
          <Box>
            <Heading>User by id</Heading>
            <pre>{user && JSON.stringify(user.data, null, 2)}</pre>
          </Box>
          <Box>
            <Heading>Users by role = engineer</Heading>
            <pre>{engineers && JSON.stringify(engineers.data, null, 2)}</pre>
          </Box>
          <Box>
            <Heading>Users by name = richard</Heading>
            <pre>{userSearch && JSON.stringify(userSearch.data, null, 2)}</pre>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
