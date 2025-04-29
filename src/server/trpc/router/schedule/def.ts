// src/server/trpc/router/schedule/def.ts
import { z } from "zod";

// スケジュール作成用入力
export const createScheduleInputSchema = z.object({
  name: z.string(),
  startAt: z.date(),
  endAt: z.date(),
  gatherAt: z.date().optional(),
  gatherPlace: z.string().optional(),
  eventId: z.string().optional(), // ← eventIdをoptionalに
});

export type CreateScheduleInput = z.infer<typeof createScheduleInputSchema>;

// スケジュール取得用（レスポンス）
export const scheduleSchema = z.object({
  id: z.string(),
  name: z.string(),
  startAt: z.date(),
  endAt: z.date(),
  gatherAt: z.date().optional(),
  gatherPlace: z.string().optional(),
  eventId: z.string().nullable(), // ← nullable
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Schedule = z.infer<typeof scheduleSchema>;
