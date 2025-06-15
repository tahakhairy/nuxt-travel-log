import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth-schema";
import { locationLogTable } from "./location-log";

export const locationLogImageTable = sqliteTable("location_log_image", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
  locationLogId: int().notNull().references(() => locationLogTable.id),
  userId: int().notNull().references(() => user.id),
});
