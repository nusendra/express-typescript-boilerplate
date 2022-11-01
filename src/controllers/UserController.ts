import { Request, Response } from "express";

type User = {
  name: string;
  email: string;
};

export const getUsers = (req: Request, res: Response) => {
  const users: [User] = [
    {
      name: "Nusendra",
      email: "admin@nusendra.com",
    },
  ];

  return res.json(users);
};
