// src/server/trpc/router/schedule/implement.ts
import { trpc } from "@src/utils/trpc"; // tRPCクライアントを使う前提

/**
 * スケジュール作成用Hook
 */
export const useCreateSchedule = () => {
  return trpc.schedule.create.useMutation();
};
