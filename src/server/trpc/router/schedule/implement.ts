// src/server/trpc/router/schedule/implement.ts
import { trpc } from "@src/utils/trpc";

/**
 * スケジュール作成用Hook
 */
export const useCreateSchedule = () => {
  return trpc.schedule.create.useMutation();
};

/**
 * スケジュール一覧取得用Hook
 */
export const useGetAllSchedules = () => {
  return trpc.schedule.getAll.useQuery();
};
