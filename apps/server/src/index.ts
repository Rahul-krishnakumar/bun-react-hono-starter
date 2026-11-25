import { Hono } from "hono";
import type { HealthResponse } from "@repo/shared";

const app = new Hono();

app.get("/health", (c) => {
  const res: HealthResponse = {
    status: "ok",
    timestamp: new Date().toISOString(),
  };
  return c.json(res);
});

export default app;
