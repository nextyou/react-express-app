import { IUser } from "../models/user.model";

export interface IDatabase {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  getUsers(): Promise<any>;
  createUser(data: IUser): Promise<any>;
}
