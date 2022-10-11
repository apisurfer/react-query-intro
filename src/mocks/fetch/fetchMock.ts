import { users, User } from "../db";
import { pause } from "./utl";

const getDbData = (search?: { name?: string; role?: string }) => {
  if (!search || !(search.name || search.role)) {
    return users;
  }

  if (search.name) {
    const term = search.name.toLowerCase();

    return users.filter((item) =>
      item.full_name.toLowerCase().startsWith(term)
    );
  }

  if (search.role) {
    return users.filter(
      (item) => item.company_role.toLowerCase() === search.role?.toLowerCase()
    );
  }
};

type FetchMock = (url: string) => Promise<User | Array<User> | undefined>;

export const fetchMock: FetchMock = async (requestUrl: string) => {
  const url = new URL(requestUrl, window.location.origin);
  console.group(`Fetch: ${requestUrl}`);
  const urlChunks = url.pathname.replace(/^\//, "").split("/");
  const [resource, id] = urlChunks;

  if (resource !== "users") {
    console.error(`request failed`);
    console.groupEnd();
    throw new Error("Unsupported resource requested");
  }

  // list/search
  if (!id) {
    const searchName = url.searchParams.get("name") as string;
    const searchRole = url.searchParams.get("role") as string;

    const response = getDbData({ name: searchName, role: searchRole });

    console.log(response);
    console.groupEnd();

    return response;

    // get by id
  } else if (id) {
    const data = getDbData();
    const response = data?.find((item) => item.id === parseInt(id, 10));

    console.log(response);
    console.groupEnd();

    return response;
  }
};

export const createDelayedFetch = (
  getDelayDuration: () => number,
  fetchFn: FetchMock = fetchMock
): FetchMock => {
  return async (url: string) => {
    const delayMs = getDelayDuration();
    await pause(delayMs);
    const data = await fetchFn(url);
    return data;
  };
};

export const createEventuallySucceedingFetch = (
  retries: number,
  fetchFn: FetchMock = fetchMock
): FetchMock => {
  let retryCount = 1;

  return async (url: string) => {
    if (retryCount < retries) {
      await fetchFn(url);
      retryCount++;
      console.error(`request failed`);
      throw new Error(
        `Request failed(mocked retries). Retry count: ${retryCount}`
      );
    }

    return fetchFn(url);
  };
};

export const createFailingFetch = (
  fetchFn: FetchMock = fetchMock
): FetchMock => {
  return async () => {
    return fetchFn("/non/existant/resource");
  };
};
