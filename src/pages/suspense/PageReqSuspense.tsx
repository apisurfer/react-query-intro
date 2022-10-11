import { FC, PropsWithChildren, Suspense } from "react";
import { Box, Heading, Spinner, HStack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchExistingUser } from "./fetchers";

const SuspenseWrap: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

const FetchingView: FC = () => {
  const { data } = useQuery(["user", 1], fetchExistingUser, { suspense: true });

  return (
    <HStack mt={5} alignItems="flex-start">
      <Box fontSize={14}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </HStack>
  );
};

export const PageReqSuspense: FC = () => {
  return (
    <Box>
      <Heading as="h1">Suspense mode</Heading>
      <Text mb={5}>Refresh page to clean react-query cache</Text>

      <SuspenseWrap>
        <FetchingView />
      </SuspenseWrap>
    </Box>
  );
};
