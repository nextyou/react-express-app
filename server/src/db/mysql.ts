import mysql from "mysql2/promise";
import { IDatabase } from "./type";
import { IUser } from "../models/user.model";

let pool: mysql.Pool;

export class MySQLDB implements IDatabase {
  async connect() {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || "localhost",
      user: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "",
      database: process.env.MYSQL_DB || "testdb",
      waitForConnections: true,
      connectionLimit: 10,
    });

    console.log("Connected to MySQL");
  }

  async disconnect() {
    await pool.end();
    console.log("MySQL connection closed");
  }

  async getUsers() {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  }

  async createUser(data: IUser) {
    const [result] = await pool.query(
      "INSERT INTO users (fullname, username, email, password) VALUES (?, ? ,? , ?)",
      [data.fullName, data.userName, data.email, data.password]
    );
    const insertId = (result as mysql.ResultSetHeader).insertId;
    return { id: insertId, ...data };
  }
}
