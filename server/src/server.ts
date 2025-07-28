import app from "./app";
import dotenv from "dotenv";
import { getDatabase } from "./db";
dotenv.config();
const PORT = process.env.PORT ?? 5000;
const db = getDatabase();
db.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
