// src/schemas/schedule.ts
// 目的: APIの入出力契約（Contract）をZodで定義し、OpenAPIにも流用する。

import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { LinkInput } from "@schemas/_shared/link";
import { ReminderInput } from "./_shared/reminder";
import { Id, IdArray } from "./_shared/ids";

// ZodにOpenAPI用メタデータ機能を拡張
extendZodWithOpenApi(z);

// POST /api/schedules の入力ボディ
export const CreateScheduleInput = z.object({
  // 必須
  name: z.string().min(1).openapi({ example: "朝会" }),
  // JSONはDate型を持てないため、API境界ではISO文字列に統一
  startAt: z.string().datetime().openapi({ example: "2025-08-17T09:00:00.000Z" }),
  endAt: z.string().datetime().openapi({ example: "2025-08-17T09:30:00.000Z" }),

  // optional
  gatherAt: z.string().datetime().optional().openapi({ example: "2025-08-17T08:50:00.000Z" }),
  gatherPlace: z.string().optional().openapi({ example: "Zoom" }),
  eventId: IdArray.optional(),
  reminders: z.array(ReminderInput).optional(), // openapi()足す
  links: z.array(LinkInput).optional(), // openapi()足す
  scheduleTagsIds: IdArray.optional(),
});

// PUT /api/schedules の入力ボディ
export const UpdateScheduleInput = z.object({
  // 必須
  id: Id,

  // optional
  name: z.string().min(1).optional().openapi({ example: "朝会" }),
  startAt: z.string().datetime().optional().openapi({ example: "2025-08-17T09:00:00.000Z" }),
  endAt: z.string().datetime().optional().openapi({ example: "2025-08-17T09:30:00.000Z" }),
  gatherAt: z.string().datetime().optional().openapi({ example: "2025-08-17T08:50:00.000Z" }),
  gatherPlace: z.string().optional().openapi({ example: "Zoom" }),
  eventId: z.string().optional().openapi({ example: "evt_123" }),
  reminders: z.array(ReminderInput).optional(), // openapi()足す
  links: z.array(LinkInput).optional(), // openapi()足す
  scheduleTagsIds: IdArray.optional(),
});

// レスポンス1件（DBのDateはISO文字列に変換して返す）
export const Schedule = z.object({
  id: Id,
  name: z.string().openapi({ example: "朝会" }),
  startAt: z.string().datetime().nullable(),
  endAt: z.string().datetime().nullable(),
  gatherAt: z.string().datetime().nullable(),
  gatherPlace: z.string().nullable().openapi({ example: "Zoom" }),
  eventId: z.string().nullable().openapi({ example: "evt_123" }),
  reminders: z.array(ReminderInput).nullable().openapi({ example: [{ message: "明日は春メルです", remindAt: "2025-08-17T08:55:00.000Z" }] }),
  links: z.array(LinkInput).nullable().openapi({ example: [{ url: "https://example.com" }] }),
  scheduleTagsIds: IdArray.nullable().openapi({ example: ["tag_123", "tag_456"] }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

// GET 一覧のクエリ（ページング）
export const ListSchedulesQuery = z.object({
  page: z.coerce.number().int().min(1).default(1).openapi({ example: 1 }),
  perPage: z.coerce.number().int().min(1).max(100).default(50).openapi({ example: 50 }),
});

// GET 一覧のレスポンス
export const ListSchedulesResponse = z.object({
  items: z.array(Schedule),
  total: z.number().int().openapi({ example: 123 }),
  page: z.number().int(),
  perPage: z.number().int(),
});

export type CreateScheduleInput = z.infer<typeof CreateScheduleInput>;
export type Schedule = z.infer<typeof Schedule>;


// DELETE スケジュールの削除
export const DeleteScheduleInput = z.object({
  id: Id,
});
export type DeleteScheduleInput = z.infer<typeof DeleteScheduleInput>;
