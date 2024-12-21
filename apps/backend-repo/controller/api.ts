import { updateUser, fetchUser } from "../repository/userCollection";
import { Request, Response } from "express";

export const updateUserData = async (req: Request, res: Response) => {
  try {
    await updateUser(req.body);
    res.status(200).send("User updated successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const user = await fetchUser(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
