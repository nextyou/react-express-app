import { getDatabase } from "../db";
import { User, IUser } from "../models/user.model";
const db = getDatabase();
export const createUser = async (data: IUser) => {
  return await db.createUser(data);
};
export const getUsers = async () => {
  const users = await db.getUsers();
  return users;
};

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const updateUser = async (id: string, data: Partial<IUser>) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};
