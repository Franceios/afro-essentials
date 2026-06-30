import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { API_PREFIX } from "./constants";
import { env } from "./config/env";
import routes from "./routes";

const app = express();

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(API_PREFIX, routes);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Afro Essentials API is running",
  });
});

app.get(`${API_PREFIX}/health`, (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
    environment: env.nodeEnv,
  });
});

export default app;