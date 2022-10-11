import { createDelayedFetch, randomizeDelay } from "../../mocks";

const fetch = createDelayedFetch(randomizeDelay(500, 1000));

export const fetchExistingUser = () => fetch("/users/1");
