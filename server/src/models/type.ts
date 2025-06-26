import { Request } from "express";
interface ICreateUser extends Request {
  name: string;
  email: string;
  password: string;
}
