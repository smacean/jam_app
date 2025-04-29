// src/server/trpc/router/schedule/def.ts
import { z } from "zod";

// スケジュール作成用の入力スキーマ（変更可）
export const createScheduleInputSchema = z.object({
  name: z.string(),
  startAt: z.date(),
  endAt: z.date(),
  gatherAt: z.date().optional(),
  gatherPlace: z.string().optional(),
  eventId: z.string(), // 外部キー
  userId: z.string(), // 作成者
});

// スケジュール作成用の型（変更可）
export type CreateScheduleInput = z.infer<typeof createScheduleInputSchema>;
