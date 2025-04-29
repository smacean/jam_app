// src/server/trpc/router/_app.ts
import { router } from "@/server/trpc/core";
import { scheduleRouter } from "./schedule/api";

export const appRouter = router({
  schedule: scheduleRouter, // "schedule"部分も後から変更可能
});

export type AppRouter = typeof appRouter;
