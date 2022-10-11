import { FC, useEffect, useState } from "react";
import { Box, Heading, Spinner, HStack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchExistingUser } from "./fetchers";

export const PageReqSuccess: FC = () => {
  const data = useQuery(["users", "byId", 1], fetchExistingUser);

  // Hook toggle option

  // const [trigger, setTrigger] = useState(false);
  // const data = useQuery(["user", 1], fetchExistingUser, {enabled: trigger});
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTrigger(true);
  //   }, 1000);
  // }, []);

  return (
    <Box>
      <Heading as="h1">Async state, success case</Heading>
      <Text mb={5}>Refresh page to clean react-query cache</Text>

      <Box my={5}>{data.isLoading && <Spinner />}</Box>

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
