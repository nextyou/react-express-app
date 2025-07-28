import { Request, Response, NextFunction } from "express";

// Track request counts
const ipRequests: Record<string, { count: number; timestamp: number }> = {};
const WINDOW_SIZE = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const apiRateLimitMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ip = req.ip ?? "";
  const now = Date.now();

  if (!ipRequests[ip]) {
    ipRequests[ip] = { count: 1, timestamp: now };
    return next();
  }
  const timePassed = now - ipRequests[ip].timestamp;
  if (timePassed > WINDOW_SIZE) {
    // Reset after window
    ipRequests[ip] = { count: 1, timestamp: now };
    return next();
  }

  ipRequests[ip].count++;

  if (ipRequests[ip].count > MAX_REQUESTS) {
    return res
      .status(429)
      .json({ message: "Too many requests. Try again later." });
  }

  next();
};

export default apiRateLimitMiddleware;
