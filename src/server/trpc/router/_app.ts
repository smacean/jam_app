// src/server/trpc/router/_app.ts
import { router } from "@src/server/trpc/core"; // ← ここをcore.tsからimportする！
import { scheduleRouter } from "./schedule/api";

export const appRouter = router({
  schedule: scheduleRouter, // ここはそのまま
});

// AppRouter型（クライアント側で必要）
export type AppRouter = typeof appRouter;
