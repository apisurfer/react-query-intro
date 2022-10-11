import { FC } from "react";
import { Box, Heading, Spinner, HStack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetch } from "./fetchers";

const UserData: FC<{ userId: number }> = ({ userId }) => {
  const { isLoading, data } = useQuery(["user", userId], () =>
    fetch(`/users/${userId}`)
  );

  return (
    <Box>
      <Box my={5}>{isLoading && <Spinner />}</Box>
      <Text mb={5}>Refresh page to clean react-query cache</Text>

      <HStack mt={5} alignItems="flex-start">
        <Box>
          <pre>{data && JSON.stringify(data, null, 2)}</pre>
        </Box>
      </HStack>
    </Box>
  );
};

export const PageReqConcurency: FC = () => {
  return (
    <Box>
      <Heading as="h1">Concurrency</Heading>
      <UserData userId={1} />
      <UserData userId={2} />
      <UserData userId={2} />
      <UserData userId={2} />
      <UserData userId={1} />
      <UserData userId={2} />
      <UserData userId={2} />
      <UserData userId={2} />
    </Box>
  );
};
