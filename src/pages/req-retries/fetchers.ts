import {
  createDelayedFetch,
  createEventuallySucceedingFetch,
  randomizeDelay,
} from "../../mocks";

const fetch = createDelayedFetch(
  randomizeDelay(500, 1000),
  createEventuallySucceedingFetch(3)
);

export const fetchExistingUser = () => fetch("/users/1");
