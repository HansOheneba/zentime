import { relations } from "drizzle-orm/relations";
import { schedules, scheduleAvailabilities } from "./schema";

export const scheduleAvailabilitiesRelations = relations(scheduleAvailabilities, ({one}) => ({
	schedule: one(schedules, {
		fields: [scheduleAvailabilities.scheduleId],
		references: [schedules.id]
	}),
}));

export const schedulesRelations = relations(schedules, ({many}) => ({
	scheduleAvailabilities: many(scheduleAvailabilities),
}));