import { createDelayedFetch, randomizeDelay } from "../../mocks";

const fetch1 = createDelayedFetch(randomizeDelay(5000, 6000));
const fetch2 = createDelayedFetch(randomizeDelay(100, 200));

let counter = 0;

export const fetchUser = () => {
  counter++;
  if (counter < 4) {
    return fetch1(`/users/1`);
  } else {
    return fetch2(`/users/2`);
  }
};
