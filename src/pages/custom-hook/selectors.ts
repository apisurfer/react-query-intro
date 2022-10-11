import { User } from "../../mocks/db";
import { UserInternal } from "./types";

export const selectUserData = (user: User): UserInternal => {
  return {
    id: user.id,
    createdAt: new Date(user.created_at),
    fullName: user.full_name,
    companyRole: user.company_role,
  };
};
