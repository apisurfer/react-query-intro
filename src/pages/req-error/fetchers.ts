import { createDelayedFetch, randomizeDelay } from "../../mocks";

const fetch = createDelayedFetch(randomizeDelay(100, 300));

export const fetchNonExistingRoute = () => fetch("/wrong-url");
