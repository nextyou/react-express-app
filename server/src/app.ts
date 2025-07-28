import express from "express";
import compression from "compression";
import userRoutes from "./routes/user.routes";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";
// import apiRateLimitMiddleware from "./middlewares/api-rate-limit-middleware";
const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
// app.use(apiRateLimitMiddleware);

app.use("/api/users", userRoutes);
// Error middleware should come *after* routes
app.use(errorMiddleware);
export default app;
