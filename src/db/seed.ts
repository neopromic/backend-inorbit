import type { PgTable } from "drizzle-orm/pg-core";
import { db } from ".";
import { goals, goalCompletions } from "./schema";

const goalsTable = goals as PgTable;

const goalCompletionsTable = goalCompletions as PgTable;

async function seed() {
  await db.delete(goalCompletionsTable);
  await db.delete(goalsTable);

  await db.insert(goals).values([
    {
      title: "Acordar cedo",
      desiredWeeklyFrequency: 2,
    },
  ]);
}
seed();
