import { createDelayedFetch, randomizeDelay } from "../../mocks";

export const fetch = createDelayedFetch(randomizeDelay(500, 1000));
