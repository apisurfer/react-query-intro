import { FC, useState } from "react";
import { Box, Heading, Spinner, HStack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "./fetchers";

export const PageOutOfOrder: FC = () => {
  const [term, setTerm] = useState("");
  const data = useQuery(["user", term], fetchUser, { enabled: Boolean(term) });

  return (
    <Box>
      <Heading as="h1">Out of order responses</Heading>
      <Text mb={5}>Refresh page to clean react-query cache</Text>

      <Box my={5}>{data.isFetching && <Spinner />}</Box>

      <input
        placeholder="Search users"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      <HStack mt={5} alignItems="flex-start">
        <Box fontSize={14}>
          <pre>{data && JSON.stringify(data, null, 2)}</pre>
        </Box>

        <Box>
          <pre>{data.data && JSON.stringify(data.data, null, 2)}</pre>
        </Box>
      </HStack>
    </Box>
  );
};
