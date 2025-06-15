import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth-schema";
import { locationTable } from "./location";

export const locationLogTable = sqliteTable("location_log", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
  locationId: int().notNull().references(() => locationTable.id),
  userId: int().notNull().references(() => user.id),
});
