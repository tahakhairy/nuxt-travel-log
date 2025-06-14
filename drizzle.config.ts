import { defineConfig } from "drizzle-kit";

import env from "./lib/env";

export default defineConfig({
  out: "./lib/drizzle/migrations",
  schema: "./lib/drizzle/db/schema.ts",
  dialect: "turso",
  casing: "snake_case",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.TURSO_AUTH_TOKEN,
  },
});
