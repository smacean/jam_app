import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { Id, IdArray } from "./_shared/ids";

extendZodWithOpenApi(z);

// ===== 共通 Tag スキーマ =====
export const TagSchema = z.object({
  id: Id.openapi({ example: "tag_abc" }),
  name: z.string().openapi({ example: "Morning Meeting" }),
  groupId: Id.optional().nullable().openapi({ example: "group_abc" }),
  createdAt: z
    .string()
    .datetime()
    .openapi({ example: "2025-08-17T09:00:00.000Z" }),
  updatedAt: z
    .string()
    .datetime()
    .openapi({ example: "2025-08-17T09:10:00.000Z" }),
});

// ===== ScheduleTag スキーマ =====
export const ScheduleTagSchema = TagSchema.extend({
  scheduleIds: IdArray.optional().openapi({ example: ["sch_123", "sch_456"] }),
});

// ===== EventTag スキーマ =====
export const EventTagSchema = TagSchema.extend({
  eventIds: IdArray.optional().openapi({ example: ["evt_123", "evt_456"] }),
});

// ===== 入力スキーマ =====
export const CreateScheduleTagInput = z.object({
  name: z.string().min(1).openapi({ example: "Morning Meeting" }),
  groupId: Id.optional().nullable().openapi({ example: "group_abc" }),
  scheduleIds: IdArray.optional().openapi({ example: ["sch_123"] }),
});

export const CreateEventTagInput = z.object({
  name: z.string().min(1).openapi({ example: "Launch Event" }),
  groupId: Id.optional().nullable().openapi({ example: "group_abc" }),
  eventIds: IdArray.optional().openapi({ example: ["evt_123"] }),
});

export const UpdateScheduleTagInput = z.object({
  name: z.string().min(1).openapi({ example: "Morning Meeting (Updated)" }),
  groupId: Id.optional().nullable(),
  scheduleIds: IdArray.optional(),
});

export const UpdateEventTagInput = z.object({
  name: z.string().min(1).openapi({ example: "Launch Event (Updated)" }),
  groupId: Id.optional().nullable(),
  eventIds: IdArray.optional(),
});

// ===== 一覧取得クエリ =====
export const ListTagsQuery = z.object({
  page: z.coerce.number().int().min(1).default(1).openapi({ example: 1 }),
  perPage: z.coerce
    .number()
    .int()
    .min(1)
    .max(100)
    .default(50)
    .openapi({ example: 50 }),
  groupId: Id.optional().openapi({ example: "group_abc" }),
});

// ===== 一覧レスポンス =====
export const ListScheduleTagsResponse = z.object({
  items: z.array(ScheduleTagSchema),
  total: z.number().int().openapi({ example: 123 }),
  page: z.number().int(),
  perPage: z.number().int(),
});

export const ListEventTagsResponse = z.object({
  items: z.array(EventTagSchema),
  total: z.number().int().openapi({ example: 123 }),
  page: z.number().int(),
  perPage: z.number().int(),
});

// ===== TagGroup スキーマ =====
export const TagGroupSchema = z.object({
  id: Id.openapi({ example: "group_abc" }),
  name: z.string().openapi({ example: "Event Tags" }),
  scheduleTags: z.array(ScheduleTagSchema).optional(),
  eventTags: z.array(EventTagSchema).optional(),
  createdAt: z
    .string()
    .datetime()
    .openapi({ example: "2025-08-17T08:00:00.000Z" }),
  updatedAt: z
    .string()
    .datetime()
    .openapi({ example: "2025-08-17T08:10:00.000Z" }),
});

// ===== TagGroup 入出力 =====
export const CreateTagGroupInput = z.object({
  name: z.string().min(1).openapi({ example: "Event Tags" }),
});

export const UpdateTagGroupInput = z.object({
  name: z.string().min(1).openapi({ example: "Event Tags (Updated)" }),
});

export const ListTagGroupsResponse = z.object({
  items: z.array(TagGroupSchema),
  total: z.number().int().openapi({ example: 10 }),
  page: z.number().int(),
  perPage: z.number().int(),
});

// ===== 共通エラー形 =====
export const ApiErrorSchema = z.object({
  error: z.string().openapi({ example: "Invalid body" }),
});

// ===== TypeScript 型 =====
export type ScheduleTag = z.infer<typeof ScheduleTagSchema>;
export type EventTag = z.infer<typeof EventTagSchema>;
export type TagGroup = z.infer<typeof TagGroupSchema>;
export type CreateScheduleTagInput = z.infer<typeof CreateScheduleTagInput>;
export type CreateEventTagInput = z.infer<typeof CreateEventTagInput>;
export type UpdateScheduleTagInput = z.infer<typeof UpdateScheduleTagInput>;
export type UpdateEventTagInput = z.infer<typeof UpdateEventTagInput>;
export type CreateTagGroupInput = z.infer<typeof CreateTagGroupInput>;
export type UpdateTagGroupInput = z.infer<typeof UpdateTagGroupInput>;
