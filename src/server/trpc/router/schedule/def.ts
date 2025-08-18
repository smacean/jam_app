// src/server/trpc/router/schedule/def.ts
import { z } from "zod";

// スケジュール作成用入力
export const createScheduleInputSchema = z.object({
  name: z.string(),
  startAt: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date(),
  ),
  endAt: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date(),
  ),
  gatherAt: z
    .preprocess(
      (arg) => (typeof arg === "string" ? new Date(arg) : arg),
      z.date(),
    )
    .optional(),
  gatherPlace: z.string().optional(),
  eventId: z.string().optional(),
});

export type CreateScheduleInput = z.infer<typeof createScheduleInputSchema>;

// スケジュール取得用（レスポンス）
export const scheduleSchema = z.object({
  id: z.string(),
  name: z.string(),
  startAt: z.date(),
  endAt: z.date(),
  gatherAt: z.date().optional(),
  gatherPlace: z.string().nullable(),
  eventId: z.string().nullable(), // ← nullable
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Schedule = z.infer<typeof scheduleSchema>;
