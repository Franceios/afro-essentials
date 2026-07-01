import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const generateAccessToken = (userId: string, role: string): string => {
  return jwt.sign(
    { userId, role },
    env.jwtSecret,
    { expiresIn: "15m" }
  );
};

export const generateRefreshToken = (userId: string): string => {
  return jwt.sign(
    { userId },
    env.jwtSecret,
    { expiresIn: "7d" }
  );
};