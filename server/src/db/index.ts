import { config } from "../config/config";
import { MongoDB } from "./mongodb";
import { MySQLDB } from "./mysql";
import { IDatabase } from "./type";
export function getDatabase(): IDatabase {
  switch (config.dbType) {
    case "mongo":
      return new MongoDB();
    case "mysql":
      return new MySQLDB();
    default:
      throw new Error(`Unsupported database type: ${config.dbType}`);
  }
}
