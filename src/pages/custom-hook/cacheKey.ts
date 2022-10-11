export const cacheKey = {
  users: () => ["users"],
  userById: (id?: number) => [...cacheKey.users(), id],
  userProfileData: (id: number) => [...cacheKey.userById(id), "profile"],
};
