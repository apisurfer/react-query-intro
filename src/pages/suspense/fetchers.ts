import { createDelayedFetch, randomizeDelay } from "../../mocks";

const fetch = createDelayedFetch(randomizeDelay(1000, 2000));

export const fetchExistingUser = () => fetch("/users/1");
