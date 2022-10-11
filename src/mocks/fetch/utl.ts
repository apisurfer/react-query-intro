export const pause = (delay: number) =>
  new Promise((r) => setTimeout(r, delay));

export const randomizeDelay = (min: number, max: number) => () =>
  min + Math.random() * (max - min);
