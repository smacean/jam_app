// src/schemas/event.ts
// 目的: APIの入出力契約（Contract）をZodで定義し、OpenAPIにも流用する。

import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { Id, IdArray } from "./_shared/ids";

// ZodにOpenAPI用メタデータ機能を拡張
extendZodWithOpenApi(z);

/**
 * Create
 * POST /api/events
 */
export const CreateEventRequest = z.object({
  name: z.string().min(1).openapi({ example: "社内LT大会" }),
  description: z.string().optional().openapi({ example: "ライトニングトークを実施します" }),
  // 多対多: Event_EventTag 経由で EventTag を紐付け
  eventTagIds: IdArray.optional().openapi({ example: ["evt_tag_001", "evt_tag_002"] }),
});
export type CreateEventRequest = z.infer<typeof CreateEventRequest>;

/**
 * Update
 * PUT /api/events/:id もしくは PUT /api/events（bodyにidを含める運用）
 * - ここでは body に id を含める版（schedules に合わせる）
 */
export const UpdateEventRequest = z.object({
  id: Id,
  name: z.string().min(1).optional().openapi({ example: "社内LT大会（第2回）" }),
  // null を許容したい運用なら .nullable().optional() に変更
  description: z.string().optional().openapi({ example: "登壇者を追加募集します" }),
  eventTagIds: IdArray.optional().openapi({ example: ["evt_tag_003"] }),
});
export type UpdateEventRequest = z.infer<typeof UpdateEventRequest>;

/**
 * Path params
 * GET /api/events/:id, PUT /api/events/:id, DELETE /api/events/:id など
 */
export const GetEventParams = z.object({
  id: Id,
});
export type GetEventParams = z.infer<typeof GetEventParams>;

/**
 * Query (list)
 * GET /api/events?page=&perPage=
 */
export const ListEventsQuery = z.object({
  page: z.coerce.number().int().min(1).default(1).openapi({ example: 1 }),
  perPage: z.coerce.number().int().min(1).max(100).default(50).openapi({ example: 50 }),
});
export type ListEventsQuery = z.infer<typeof ListEventsQuery>;

/**
 * Response schema (single)
 * - DBのDateはISO文字列へ
 * - descriptionはDBでNullableなので nullable()
 * - eventTagIdsは配列（空配列許容）で返す前提
 */
export const Event = z.object({
  id: Id,
  name: z.string().openapi({ example: "社内LT大会" }),
  description: z.string().nullable().openapi({ example: "ライトニングトークを実施します" }),
  eventTagIds: z.array(Id).openapi({ example: ["evt_tag_001", "evt_tag_002"] }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type Event = z.infer<typeof Event>;

/**
 * List response
 */
export const ListEventsResponse = z.object({
  items: z.array(Event),
  total: z.number().int().openapi({ example: 42 }),
  page: z.number().int(),
  perPage: z.number().int(),
});
export type ListEventsResponse = z.infer<typeof ListEventsResponse>;

/**
 * Delete
 */
export const DeleteEventRequest = z.object({
  id: Id,
});
export type DeleteEventRequest = z.infer<typeof DeleteEventRequest>;

export const DeleteEventResponse = z.object({
  success: z.boolean().openapi({ example: true }),
});
export type DeleteEventResponse = z.infer<typeof DeleteEventResponse>;
