export interface User {
  id: number;
  created_at: number;
  full_name: string;
  company_role: string;
}

export const users: Array<User> = [
  {
    id: 1,
    created_at: 1665404785105,
    full_name: "Pavel Đuga",
    company_role: "it-technician",
  },
  {
    id: 2,
    created_at: 1665404785105,
    full_name: "Richard Hendricks",
    company_role: "ceo",
  },
  {
    id: 3,
    created_at: 1665404785105,
    full_name: "Bertram Gilfoyle",
    company_role: "engineer",
  },
  {
    id: 4,
    created_at: 1665404785105,
    full_name: "Erlich Bachman",
    company_role: "board-member",
  },
  {
    id: 5,
    created_at: 1665404785105,
    full_name: "Dinesh Chugtai",
    company_role: "engineer",
  },
  {
    id: 6,
    created_at: 1665404785105,
    full_name: "Monica Hall",
    company_role: "CFO",
  },
  {
    id: 7,
    created_at: 1665404785105,
    full_name: "Russ Hanneman",
    company_role: "Billionaire",
  },
];
