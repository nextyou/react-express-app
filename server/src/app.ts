import express from "express";
import userRoutes from "./routes/user.routes";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// Error middleware should come *after* routes
app.use(errorMiddleware);
export default app;
