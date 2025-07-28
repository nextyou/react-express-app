import dotenv from "dotenv";
dotenv.config();
export const config = {
  dbType: process.env.DB_TYPE || "mongo", // "mongo" | "postgres"
};
