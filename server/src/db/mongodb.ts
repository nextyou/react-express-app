import mongoose from "mongoose";
import { IDatabase } from "./type";
import { IUser } from "../models/user.model";
export class MongoDB implements IDatabase {
  async connect() {
    await mongoose.connect(process.env.MONGO_URI ?? "");
    console.log("Connected to MongoDB");
  }

  async disconnect() {
    await mongoose.disconnect();
  }
  async getUsers(): Promise<any[]> {
    return [];
  }
  async createUser(data: IUser): Promise<any> {}
}
