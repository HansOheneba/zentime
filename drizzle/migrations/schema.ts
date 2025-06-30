import { pgTable, index, uuid, text, integer, boolean, timestamp, unique, foreignKey, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const day = pgEnum("day", ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])


export const events = pgTable("events", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	description: text(),
	durationInMinutes: integer().notNull(),
	clerkUserId: text().notNull(),
	isActive: boolean().default(true).notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("clerkUserIdIndex").using("btree", table.clerkUserId.asc().nullsLast().op("text_ops")),
]);

export const schedules = pgTable("schedules", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	timezone: text().notNull(),
	clerkUserId: text().notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	unique("schedules_clerkUserId_unique").on(table.clerkUserId),
]);

export const scheduleAvailabilities = pgTable("scheduleAvailabilities", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	scheduleId: uuid().notNull(),
	startTime: text().notNull(),
	endTime: text().notNull(),
	dayOfWeek: day().notNull(),
}, (table) => [
	index("scheduleIdIndex").using("btree", table.scheduleId.asc().nullsLast().op("uuid_ops")),
	foreignKey({
			columns: [table.scheduleId],
			foreignColumns: [schedules.id],
			name: "scheduleAvailabilities_scheduleId_schedules_id_fk"
		}).onDelete("cascade"),
]);
