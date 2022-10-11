import { FC, PropsWithChildren, Suspense } from "react";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useFetchUser } from "./useFetchUser";

// Page suspense/loading handler
const SuspenseWrap: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

// Page initiating fetch
const FetchingView: FC<{ userId: number }> = ({ userId }) => {
  const { isLoading, data } = useFetchUser(userId, { suspense: true });

  return (
    <>
      <Box my={5}>{isLoading && <Spinner />}</Box>
      <Box>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </>
  );
};

// Layout
export const PageCustomHook: FC = () => {
  return (
    <Box>
      <Heading as="h1">Custom hook example with data selector</Heading>
      <Text mb={5}>Refresh page to clean react-query cache</Text>

      <SuspenseWrap>
        <FetchingView userId={1} />
      </SuspenseWrap>
    </Box>
  );
};
