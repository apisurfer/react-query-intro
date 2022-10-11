import { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ExampleList: FC = () => {
  return (
    <VStack spacing={2} alignItems="flex-start">
      <Link to="/req-success">async state — success</Link>
      <Link to="/req-error">async state — error</Link>
      <Link to="/req-retries">async state — auto retries</Link>
      <Link to="/suspense">suspense</Link>
      <Link to="/concurrency">concurrency</Link>
      <Link to="/cache-invalidation">cache invalidation</Link>
      <Link to="/out-of-order">out of order responses</Link>
      <Link to="/custom-hook">custom hook example</Link>
    </VStack>
  );
};
