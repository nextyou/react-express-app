import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.service";
import { AppError } from "../utils/errorHandler";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.createUser(req.body);
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    res.status(201).json(user);
  } catch (error: any) {
    next(error);
  }
};

export const getAll = async (_req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const getById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

export const update = async (req: Request, res: Response) => {
  const user = await userService.updateUser(req.params.id, req.body);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

export const remove = async (req: Request, res: Response) => {
  const user = await userService.deleteUser(req.params.id);
  user
    ? res.json({ message: "User deleted" })
    : res.status(404).json({ message: "User not found" });
};
