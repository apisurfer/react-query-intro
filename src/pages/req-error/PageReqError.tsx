import { FC } from "react";
import { Box, HStack, Heading, Text, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchNonExistingRoute } from "./fetchers";

export const PageReqError: FC = () => {
  const data = useQuery(["user", 1], fetchNonExistingRoute);

  return (
    <Box>
      <Heading as="h1">Async state — error</Heading>
      <Text mb={5}>Refresh page to clean react-query cache</Text>

      <Box my={5}>{data.isLoading && <Spinner />}</Box>

      <Text>Failure count {data.failureCount}</Text>

      <HStack mt={5} alignItems="flex-start">
        <Box fontSize={14}>
          <pre>{data && JSON.stringify(data, null, 2)}</pre>
        </Box>

        <Box>{data?.isError && <pre>{data.error?.message}</pre>}</Box>
      </HStack>
    </Box>
  );
};
