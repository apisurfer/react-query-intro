---

# Origin

Key abbreviation:

SWR — Stale While Revalidate

---

# SWR

"Cache-Control" HTTP response header has many possible directives.

2 SWR directives are: "max-age" and "stale-while-revalidate".

Cached responses older than "max-age" are considered stale, at that moment
"stale-while-revalidate" comes into play.

---

# Process

1. serve stale data from cache if in "stale-while-revalidate" time window
2. request new data in parallel
3. replace stale cache entry with new data
4. "max-age" timer resets to 0. Every new request gets "fresh"
   data until "max-age" time has passed

---

# Example

```
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

max-age: 7 days
stale-while-revalidate: 1 day

Meaning:

- consider stale after 7 days,
- but allow serving stale data immediately for
  1 more day(given that you'll revalidate cache in background)

---

# react-query

Specialized state management lib. Targets cache and async communication.

Solves:

- async load states — loading, success, error
- cache and cache invalidation(time bound, or manual invalidate/revalidate)
- dependant cache entries
- request concurrency
- pagination
- retries
- suspense

---

# Devtools

Devtools similar to redux' that allow:

- review timeline
- inspect cached entries
- invalidate/revalidate entries etc.

---

# Online examples

- https://tanstack.com/query/v4/docs/guides/mutations
- https://tanstack.com/query/v4/docs/guides/placeholder-query-data
- https://tanstack.com/query/v4/docs/guides/infinite-queries
  https://tanstack.com/query/v4/docs/guides/paginated-queries
  https://tanstack.com/query/v4/docs/examples/react/pagination
- https://tanstack.com/query/v4/docs/examples/react/auto-refetching

---

# Alternatives

- SWR https://swr.vercel.app — lighter solution,
  less API surface to learn, solves less things out of the box
- GraphQL libs have their own way of cache control(normalized based on schemas),
  and also use GraphQL queries for cache keys. GraphQL responses
  can also be handled through react-query like any other HTTP request/response

## Comparison of library features

https://tanstack.com/query/v4/docs/comparison

---

# Comparison to redux/zustand/other state management libs

- specialized state management lib
- deals specifically with cache and cache control
- use when there is a ton of data to sync back and forth
  with backend, or many components requesting and combining
  the same resources
- no use/bad use as a generalized state management lib
- can go a long way with small libs like jotai, and or react context

---

# When not to use react-query(downsides)

- lib size — small apps/widgets/components that require fast
  initial load, and don't necessarily need all capabilities
- API surface — considerable learning curve

---

# The End
