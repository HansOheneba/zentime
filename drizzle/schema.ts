
import { boolean, index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt")
    .notNull().defaultNow()

const updatedAt = timestamp("updatedAt")
    .notNull().defaultNow().$onUpdate(() => new Date());

export const EventTable = pgTable(
    "events",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        name: text("name").notNull(),
        description: text("description"),
        durationInMinutes: text("durationInMinutes").notNull(),
        clerkUserId: text("clerkUserId").notNull(),
        isActive: boolean("isActive").notNull().default(true),
        createdAt,
        updatedAt,
    },
    table => ([
        index("clerkUserIdIndex").on(table.clerkUserId),
    ]
))